// ProductDetail.tsx
export interface CommentUIProps {
  setShowEdit: (value: React<React.SetStateAction<number | null>>) => void;
  setShowSelect: (value: React<React.SetStateAction<number | null>>) => void;
}

interface ListWriter {
  id: number;
  image?: React.ImgHTMLAttributes | null;
  nickname: string;
}

interface ListComment {
  content: string;
  createdAt: string;
  id: number;
  updatedAt: string;
  writer: ListWriter;
}

export interface TCommentDataProps {
  list: ListComment[];
}

// ProductDetailPage.tsx
export interface TProductDataProps {
  createdAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images?: React.ImgHTMLAttributes | null;
  isFavorite: boolean;
  name: string;
  ownerId: number;
  ownerNickname: string;
  price: number;
  tags: string[];
  updatedAt: string;
}
