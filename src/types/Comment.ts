export default interface Comment {
  nextCursor: number;
  list: {
    writer: {
      image: string;
      nickname: string;
      id: number;
    };
    updatedAt: Date;
    createdAt: Date;
    content: string;
    id: number;
  }[];
}
