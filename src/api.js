const BASE_URL = "https://panda-market-api.vercel.app";
export async function getData({ page = 1, pageSize = 4, orderBy = "recent" }) {
  const url = new URL("/products", BASE_URL);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("orderBy", orderBy);

  // const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.statusText}`);
  }
  return response.json();
}
