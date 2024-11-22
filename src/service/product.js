const { VITE_API_URL } = import.meta.env;

export async function getProducts(
  { page = 1, pageSize = 10, orderBy = "recent", keyword = "" },
  signal
) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const res = await fetch(`${VITE_API_URL}/products?${query}`, { signal });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "에러가 발생했습니다.");
  }

  return data;
}

export async function getBestProducts({ pageSize }, signal) {
  const query = `page=1&pageSize=${pageSize}&orderBy=favorite`;
  const res = await fetch(`${VITE_API_URL}/products?${query}`, { signal });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "에러가 발생했습니다.");
  }

  return data;
}
