export type OrderByType = "recent" | "favorite";

export interface Product {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

interface ProductById extends Product {
  updatedAt: string;
  isFavorite: boolean;
}

interface GetDataParams {
  page?: number;
  pageSize?: number;
  orderBy?: OrderByType;
}

export interface ProductResponse {
  list: Product[];
  totalCount: number;
}

interface Writer {
  id: number;
  nickname: string;
  image: string | null;
}

interface Comment {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: Writer;
}

interface CommentListResponse {
  list: Comment[];
  nextCursor?: number;
}

interface GetCommentDataParams {
  productId?: string;
  limit: number;
  cursor?: number;
}

interface PostCommentDataParams {
  productId?: string;
  editContent: string;
}

export async function getData({
  page = 1,
  pageSize = 4,
  orderBy = "recent",
}: GetDataParams = {}): Promise<ProductResponse> {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const body = await response.json();
  return body;
}

export async function getDataById(productId?: string): Promise<ProductById> {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}`
  );
  const body = await response.json();
  return body;
}

export async function getCommentData({
  productId,
  limit,
}: GetCommentDataParams): Promise<CommentListResponse> {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}/comments?limit=${limit}`
  );
  const body = await response.json();
  return body;
}

export async function postCommentData({
  productId,
  editContent,
}: PostCommentDataParams): Promise<Response> {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInNjb3BlIjoiYWNjZXNzIiwiaWF0IjoxNzM3Mjc3NTIzLCJleHAiOjE3MzcyNzkzMjMsImlzcyI6InNwLXBhbmRhLW1hcmtldCJ9.PE7HgmQtdB0J1kQoYk4VieZfBs0CZFwedo2ttRBAHWY";

  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: editContent,
      }),
    }
  );
  return response;
}
