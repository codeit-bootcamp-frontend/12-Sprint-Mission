export interface PostData {
  id: number;
  title?: string;
  content?: string;
  image?: string;
  likeCount?: number;
  createdAt: string;
  updatedAt?: string;
  writer?: {
    id?: number;
    nickname?: string;
  };
}
