// BestItem.tsx
export interface Props {
  createAt: string;
  description: string;
  favoriteCount: number;
  id: number;
  images?: React.ImgHTMLAttributes | null;
  name: string;
  ownerId: number;
  price: number;
  tags: string[];
  updatedAt: string;
}

// BestListFilter.tsx
export interface ApiOptions {
  page: number;
  orderBy: string;
  pageSize: number;
  keyword: string;
}

// GeneralItemsList.tsx
export type ItemsList = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  setIsDataCount: React.Dispatch<React.SetStateAction<number>>;
};

// GeneralSearchForm.tsx
export type SearchForm = {
  setProductContainer: React.Dispatch<React.SetStateAction<Props[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setPageCount: React.Dispatch<React.SetStateAction<number>>;
  setIsDataCount: React.Dispatch<React.SetStateAction<number>>;
};
