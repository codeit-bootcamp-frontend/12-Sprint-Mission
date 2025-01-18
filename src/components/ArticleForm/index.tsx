'use client';

import { useForm } from 'react-hook-form';
import { submitArticle } from '@/actions/submit-article';
import { useState } from 'react';
import Image from 'next/image';

import { ArticleFormData } from '@/types';
import { useRouter } from 'next/navigation';

export default function ArticleForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    watch,
    reset,
  } = useForm<ArticleFormData>({
    defaultValues: {
      title: '',
      content: '',
      image: null,
    },
    mode: 'onChange',
  });
  const [resultMessage, setResultMessage] = useState<string | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const router = useRouter();

  const formValues = watch();

  const isFormValid = formValues.title && formValues.content;

  const onSubmit = async (data: ArticleFormData) => {
    try {
      const formData = new FormData();

      if (data.image) formData.append('image', data.image);

      formData.append('title', data.title);
      formData.append('content', data.content);
      const accessToken = localStorage.getItem('accessToken');
      const refreshToken = localStorage.getItem('refreshToken');
      const result = await submitArticle(formData, accessToken, refreshToken);
      setResultMessage(result.message);
      reset({ title: '', content: '', image: null });
      setPreviewImage(null);

      if (result.accessToken) localStorage.setItem('accessToken', result.accessToken);

      if (result.success) {
        setTimeout(() => {
          router.push(`/board/${result.id}`);
        }, 3000);
      }
      if (result.message.includes('세션')) {
        router.push(`/signin`);
      }
    } catch (error) {
      setResultMessage(error instanceof Error ? error.message : '게시글 생성 중 오류가 발생했습니다.');
    }
  };

  const preventEnterSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;

    // 기존 미리보기 이미지 URL이 존재하면 해제
    if (previewImage) {
      URL.revokeObjectURL(previewImage);
    }

    if (file) {
      setPreviewImage(URL.createObjectURL(file)); // 선택된 이미지의 미리보기 URL을 생성
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mx-auto w-[100%] max-w-[1200px] px-6'>
      <div className='flex justify-between items-center'>
        <span className='font-bold text-xl'>게시글 쓰기</span>
        <button type='submit' className={`${isSubmitting || !isFormValid ? 'bg-gray-400' : 'bg-blue-100'} text-white py-2 px-6 rounded-lg`} disabled={isSubmitting || !isFormValid}>
          {isSubmitting ? '등록 중' : '등록'}
        </button>
      </div>
      <label className='flex flex-col gap-2'>
        <span className='font-bold text-lg'>*제목</span>
        <input
          {...register('title', { required: '제목을 반드시 입력해야 합니다.' })}
          className='w-full rounded-xl py-4 px-6 bg-gray-100'
          onKeyDown={preventEnterSubmit}
          placeholder='제목을 입력해주세요'
        />
        {errors.title && <span className='text-red-error'>{errors.title.message}</span>}
      </label>

      <label className='flex flex-col gap-2'>
        <span className='font-bold text-lg'>*내용</span>
        <textarea
          {...register('content', { required: '내용을 반드시 입력해야 합니다.' })}
          className='w-full h-[120px] rounded-xl py-4 px-6 bg-gray-100 resize-none md:h-[200px]'
          onKeyDown={preventEnterSubmit}
          placeholder='내용을 입력해주세요'
        />
        {errors.content && <span className='text-red-error'>{errors.content.message}</span>}
      </label>
      <span className='font-bold text-lg'>이미지</span>
      <div className='flex gap-4'>
        <label className='flex flex-col justify-center items-center gap-2 rounded-xl w-[168px] h-[168px] bg-gray-100 cursor-pointer md:w-[282px] md:h-[282px]'>
          <Image src='/assets/icons/plus.svg' alt='이미지 등록 아이콘' width={44} height={44} style={{ width: 44, height: 44 }} />
          <span className='text-gray-400'>이미지 등록</span>
          <input type='file' {...register('image')} hidden onChange={handleImageChange} />
        </label>
        {previewImage && <Image src={previewImage} alt='업로드 할 이미지 미리보기' width={282} height={282} className='rounded-xl w-[168px] h-auto p-4 bg-gray-100 object-contain md:w-[282px]' />}
      </div>

      {resultMessage && <p className='text-green-500'>{resultMessage}</p>}
    </form>
  );
}
