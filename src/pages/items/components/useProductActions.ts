import {
  addProduct,
  deleteProduct,
  modifyProduct,
  toggleLike,
  uploadProductImage,
} from "@service/product";
import { ProductFormData } from "@type/product";

export default function useProductActions(productId?: number) {
  async function handleLike(flag: boolean) {
    if (!productId) return;

    return toggleLike(productId, flag);
  }

  async function handleProductAdd(formData: ProductFormData) {
    try {
      if (formData.images instanceof Blob) {
        const imgFormData = new FormData();
        imgFormData.append("image", formData.images);

        const { url } = await uploadProductImage(imgFormData);
        formData.images = [url];
      }

      await addProduct(formData);
    } catch (err) {
      throw err;
    }
  }

  async function handleProductModify(formData: ProductFormData) {
    if (!productId) return;

    try {
      if (formData.images instanceof Blob) {
        const imgFormData = new FormData();
        imgFormData.append("image", formData.images);

        const { url } = await uploadProductImage(imgFormData);
        formData.images = [url];
      }

      await modifyProduct(productId, formData);
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
