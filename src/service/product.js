const { VITE_API_URL } = import.meta.env;

export async function getProducts(
  { page = 1, pageSize = 10, orderBy = "recent", keyword = "" },
  { signal }
) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const res = await fetch(`${VITE_API_URL}/products?${query}`, { signal });

  const data = await res.json();

  if (!res.ok) {
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}

export async function uploadProductImage(formData, accessToken) {
  const res = await fetch(`${VITE_API_URL}/images/upload`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}

export async function addProduct(productData, accessToken) {
  const res = await fetch(`${VITE_API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(productData),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}

export async function deleteProduct(productId, accessToken) {
  const res = await fetch(`${VITE_API_URL}/products/${productId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}

export async function getProduct(productId) {
  const res = await fetch(`${VITE_API_URL}/products/${productId}`);

  const data = await res.json();

  if (!res.ok) {
    throw {
      status: res.status,
      message: data.message || "에러가 발생했습니다.",
    };
  }

  return data;
}
