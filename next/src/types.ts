export interface Post {
  id: number;
  title: string;
  content: string;
  image: string | null;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
}

export interface Posts {
  list: Post[];
  totalCount: number;
}

export interface OrderByValue {
  orderByValue: "recent" | "like";
}
