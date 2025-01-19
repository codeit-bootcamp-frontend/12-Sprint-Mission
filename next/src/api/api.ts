interface getBestPostsDataProps {
  orderBy: "like" | "recent";
  pageSize: number;
}

export async function getPostsData({
  orderBy = "recent",
  pageSize = 3,
}: getBestPostsDataProps) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/articles?page=1&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  if (!response) {
    throw new Error("베스트 게시글 페칭에 실패");
  }
  const data = await response.json();
  return data.list;
}
