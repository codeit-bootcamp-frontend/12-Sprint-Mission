// import { ArticleListResponse } from "@/types/articleTypes";

// export default async function fetchArticles(
//   page: number = 1,
//   pageSize: number = 10,
//   orderBy: "recent" | "like" = "recent",
//   keyword: string = ""
// ): Promise<ArticleListResponse> {
//   const url = `https://panda-market-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch articles: ${response.statusText}`);
//     }

//     const data: ArticleListResponse = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching articles:", error);
//     return {
//       totalCount: 0,
//       list: [],
//     };
//   }
// }
