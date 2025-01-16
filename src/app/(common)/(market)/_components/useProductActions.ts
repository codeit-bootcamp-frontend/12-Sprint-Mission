import { ProductFormType } from "@schemas/product";
import {
  addProduct,
  deleteProduct,
  modifyProduct,
  toggleLike,
  uploadProductImage,
} from "@service/product";

export default function useProductActions(productId?: number) {
  async function handleLike(flag: boolean) {
    if (!productId) return;

    return toggleLike(productId, flag);
  }

  async function handleProductAdd(formData: ProductFormType) {
    try {
      if (formData.images[0] instanceof File) {
        const { url } = await uploadProductImage(formData.images[0]);
        formData.images = [url];
      }

      return await addProduct(formData);
    } catch (err) {
      throw err;
    }
  }

  async function handleProductModify(formData: ProductFormType) {
    if (!productId) return;

    try {
      if (formData.images[0] instanceof File) {
        const { url } = await uploadProductImage(formData.images[0]);
        formData.images = [url];
      }

      return await modifyProduct(productId, formData);
    } catch (err) {
      throw err;
    }
  }

  async function handleProductDelete() {
    if (!productId) return;

    return deleteProduct(productId);
  }

  return {
    handleLike,
    handleProductAdd,
    handleProductModify,
    handleProductDelete,
  };
}
