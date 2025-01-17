'use client';

import { useForm } from 'react-hook-form';
import { submitArticle } from '@/actions/submit-article';
import { useState } from 'react';
import Image from 'next/image';

type ArticleFormData = {
  title: string;
  content: string;
  image: File | null;
};

export default function ArticleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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

  const formValues = watch();

  const isFormValid = formValues.title && formValues.content;

  const onSubmit = async (data: ArticleFormData) => {
    const formData = new FormData();

    if (data.image) formData.append('image', data.image);
    formData.append('title', data.title);
    formData.append('content', data.content);

    try {
      const result = await submitArticle(formData);
      setResultMessage(result.message);
      reset({ title: '', content: '', image: null });
    } catch (error) {
      setResultMessage(error instanceof Error ? error.message : '게시글 생성 중 오류가 발생했습니다.');
    }
  };

  const preventEnterSubmit = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4 mx-auto w-[100%] max-w-[1200px] px-6'>
      <div className='flex justify-between items-center'>
        <span className='font-bold text-xl'>게시글 쓰기</span>
        <button type='submit' className={`${isFormValid ? 'bg-blue-100' : 'bg-gray-400'} text-white py-2 px-6 rounded-lg`} disabled={!isFormValid}>
          등록
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
          className='w-full h-[200px] rounded-xl py-4 px-6 bg-gray-100 resize-none md:h-[300px]'
          onKeyDown={preventEnterSubmit}
          placeholder='내용을 입력해주세요'
        />
        {errors.content && <span className='text-red-error'>{errors.content.message}</span>}
      </label>

      <label className='flex flex-col'>
        <span className='font-bold text-lg'>이미지</span>
        <div className='flex flex-col justify-center items-center gap-2 rounded-xl w-[168px] h-[168px] bg-gray-100 cursor-pointer md:w-[282px] md:h-[282px]'>
          <Image src='/assets/icons/plus.svg' alt='이미지 등록 아이콘' width={44} height={44} style={{ width: 44, height: 44 }} />
          <span className='text-gray-400'>이미지 등록</span>
        </div>
        <input type='file' {...register('image')} hidden readOnly />
      </label>

      {resultMessage && <p className='text-green-500'>{resultMessage}</p>}
    </form>
  );
}
