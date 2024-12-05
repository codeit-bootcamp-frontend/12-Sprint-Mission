import { axiosInstance } from "@service/axios";

export async function getProducts({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await axiosInstance.get(`/products?${query}`);

  return response.data;
}

export async function uploadProductImage(formData) {
  const response = await axiosInstance.post("/images/upload", formData);

  return response.data;
}

export async function addProduct(productData) {
  const response = await axiosInstance.post("/products", productData);

  return response.data;
}

export async function modifyProduct(productId, productData) {
  const response = await axiosInstance.patch(
    `/products/${productId}`,
    productData
  );

  return response.data;
}

export async function deleteProduct(productId) {
  const response = await axiosInstance.delete(`/products/${productId}`);

  return response.data;
}

export async function getProduct(productId) {
  const response = await axiosInstance.get(`/products/${productId}`);

  return response.data;
}

export async function toggleLike(productId, flag) {
  const response = await axiosInstance({
    method: flag ? "POST" : "DELETE",
    url: `/products/${productId}/favorite`,
  });

  return response.data;
}
