export async function getData({
  page = 1,
  pageSize = 4,
  orderBy = "recent",
} = {}) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
  );
  const body = await response.json();
  return body;
}

export async function getDataById(productId) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}`
  );
  const body = await response.json();
  return body;
}

export async function getUserData({ productId, limit }) {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}/comments?limit=${limit}`
  );
  const body = await response.json();
  return body;
}

export async function postCommentData({ productId, editContent }) {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTksInNjb3BlIjoiYWNjZXNzIiwiaWF0IjoxNzM3Mjc3NTIzLCJleHAiOjE3MzcyNzkzMjMsImlzcyI6InNwLXBhbmRhLW1hcmtldCJ9.PE7HgmQtdB0J1kQoYk4VieZfBs0CZFwedo2ttRBAHWY";

  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        content: editContent,
      }),
    }
  );
  return response;
}
