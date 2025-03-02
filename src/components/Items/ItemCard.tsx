import convertLocale from '@/utils/convertLocale';
import Image from 'next/image';

interface ItmeCardProps {
  item: {
    imageUrl: string | null;
    name: string;
    price: number;
    favoriteCount: number;
  };
  className?: string;
  display?: string;
}

export default function ItemCard({ item, className, display }: ItmeCardProps) {
  return (
    <div className={`flex flex-col gap-4 ${display}`}>
      <Image src={item.imageUrl ?? '/assets/images/Img_reply_empty.svg'} alt='상품 이미지' width={282} height={282} className={`rounded-2xl ${className}`} />
      <h2>{item.name}</h2>
      <p className='font-bold text-xl'>{convertLocale(item.price)}</p>
      <div className='flex items-center gap-2'>
        <Image src='/assets/icons/heart_empty.svg' alt='좋아요 아이콘' width={16} height={16} />
        <p>{item.favoriteCount}</p>
      </div>
    </div>
  );
}
