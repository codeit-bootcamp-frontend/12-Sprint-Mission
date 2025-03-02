import { ItemsResponse } from '@/types';
import ItemCard from './ItemCard';

const REVALIDATE_SEC = 60;
const ITEM_CNT = 4;

export default async function BestItemList() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?orderBy=favorite&pageSize=${ITEM_CNT}`, {
    next: {
      revalidate: REVALIDATE_SEC,
    },
  });

  if (!response.ok) throw new Error('게시글 불러올 수 없음');
  const data: ItemsResponse = await response.json();

  return (
    <>
      <h2 className='max-w-[1176px] mx-auto text-2xl font-bold mb-2'>베스트 상품</h2>
      <div className='flex items-center gap-4 justify-center '>
        {data.list.map((item, index) => (
          <ItemCard
            key={item.id}
            item={{ ...item, imageUrl: item.images[0] }}
            className='w-[282px] object-cover h-[282px]'
            display={`       
            ${index === 2 ? 'hidden md:flex' : ''}    
            ${index === 3 ? 'hidden lg:flex' : ''} `}
          />
        ))}
      </div>
    </>
  );
}
