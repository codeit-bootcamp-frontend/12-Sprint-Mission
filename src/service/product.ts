import { axiosInstance } from "@service/axios";
import { ProductFormData } from "@type/product";

export async function getProducts(
  { page = 1, pageSize = 10, orderBy = "recent", keyword = "" },
  signal: AbortSignal
) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await axiosInstance.get(`/products?${query}`, { signal });

  return response.data;
}

export async function uploadProductImage(formData: FormData) {
  const response = await axiosInstance.post("/images/upload", formData);

  return response.data;
}

export async function addProduct(productData: ProductFormData) {
  const response = await axiosInstance.post("/products", productData);

  return response.data;
}

export async function modifyProduct(
  productId: number,
  productData: ProductFormData
) {
  const response = await axiosInstance.patch(
    `/products/${productId}`,
    productData
  );

  return response.data;
}

export async function deleteProduct(productId: number) {
  const response = await axiosInstance.delete(`/products/${productId}`);

  return response.data;
}

export async function getProduct(productId: number) {
  const response = await axiosInstance.get(`/products/${productId}`);

  return response.data;
}

export async function toggleLike(productId: number, flag: boolean) {
  const response = await axiosInstance({
    method: flag ? "POST" : "DELETE",
    url: `/products/${productId}/favorite`,
  });

  return response.data;
}
