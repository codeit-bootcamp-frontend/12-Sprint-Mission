const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts(params = {}) {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${BASE_URL}/products?${query}`);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("Failed to fetch products: ", error);
    throw error;
  }
}

export async function getProductById(productId) {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  try {
    const response = await fetch(`${BASE_URL}/products/${productId}`);
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch product details: ", error);
    throw error;
  }
}

export async function getProductComments({ productId, params }) {
  if (!productId) {
    throw new Error("Invalid product ID");
  }

  try {
    const query = new URLSearchParams(params).toString();
    const response = await fetch(
      `${BASE_URL}/products/${productId}/comments?${query}`
    );
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch product comments: ", error);
    throw error;
  }
}
