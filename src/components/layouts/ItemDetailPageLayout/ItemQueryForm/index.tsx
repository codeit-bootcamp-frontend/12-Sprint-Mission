import { useState } from 'react';
import { QUERY_PLACEHOLDER } from '@/utils/constant';

const ItemQueryForm = () => {
  const [isValid, setIsValid] = useState(false);

  const onChangeHandler = ({ target }: { target: HTMLTextAreaElement }) => {
    if (target.value.trim() !== '') setIsValid(true);
    else setIsValid(false);
  };
  return (
    <form className='flex flex-col mx-auto w-4/5'>
      <label htmlFor='content' className='my-4 text-gray-900 font-bold'>
        문의하기
      </label>
      <textarea name='content' id='content' className='bg-gray-100 rounded-xl py-6 px-6 h-44 resize-none md:h-auto' onChange={onChangeHandler} placeholder={QUERY_PLACEHOLDER.TEXT}></textarea>
      <button disabled={!isValid} className={`my-4 ml-auto py-2 px-6 rounded-xl text-white ${isValid ? 'bg-blue-500 hover:bg-blue-700' : 'bg-gray-400'}`}>
        등록
      </button>
    </form>
  );
};

export default ItemQueryForm;
