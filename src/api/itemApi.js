export async function getItems(params = {}) {
  const query = new URLSearchParams(params).toString();
  const url = `https://panda-market-api.vercel.app/products?${query}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("아이템 목록 나열 실패", error);
    throw error;
  }
}
