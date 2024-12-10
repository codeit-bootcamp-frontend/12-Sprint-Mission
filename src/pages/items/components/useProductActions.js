import {
  addProduct,
  deleteProduct,
  modifyProduct,
  toggleLike,
  uploadProductImage,
} from "@service/product";

export default function useProductActions(productId) {
  async function handleLike(flag) {
    return toggleLike(productId, flag);
  }

  async function handleProductAdd(formData) {
    try {
      if (formData.images) {
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

  async function handleProductModify(prevData, formData) {
    try {
      if (formData.images !== prevData.images[0]) {
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
    return deleteProduct(productId);
  }

  return {
    handleLike,
    handleProductAdd,
    handleProductModify,
    handleProductDelete,
  };
}
