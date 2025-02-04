import { baseURL } from "@/constants";
import { Article } from "@/types";

export default async function getArticle(articleId: number): Promise<Article> {
  const url = `${baseURL}/articles/${articleId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch, ${response.statusText}`);
    }
    const data: Article = await response.json();
    return data;
  } catch (err) {
    throw new Error(`FetchPost Error: ${(err as Error).message}`);
  }
}
