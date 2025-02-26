import { ListMode } from "@/types/article";
import { ListQueryParams } from "@/types/common";
import { ProductFormType } from "@schemas/product";
import {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  modifyProduct,
  toggleLike,
  uploadProductImage,
} from "@service/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useGetProducts(
  mode: ListMode,
  params: Partial<ListQueryParams>
) {
  return useQuery({
    queryKey: ["products", mode, params],
    queryFn: () =>
      getProducts({
        ...params,
        orderBy: mode === "best" ? "favorite" : "recent",
      }),
  });
}

export function useGetProduct(productId: number) {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => getProduct(productId),
  });
}

export function useProductAdd() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: ProductFormType) => {
      if (formData.images[0] instanceof File) {
        const { url } = await uploadProductImage(formData.images[0]);
        formData.images = [url];
      }
      return addProduct(formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}

export function useProductModify(productId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: ProductFormType) => {
      if (formData.images[0] instanceof File) {
        const { url } = await uploadProductImage(formData.images[0]);
        formData.images = [url];
      }
      return modifyProduct(productId, formData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });
}

export function useProductToggleLike(productId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (flag: boolean) => toggleLike(productId, flag),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["product", productId] });
    },
  });
}

export function useProductDelete(productId: number) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => deleteProduct(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
  });
}
