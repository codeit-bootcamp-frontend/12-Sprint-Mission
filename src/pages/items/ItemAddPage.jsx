import { addProduct, uploadProductImage } from "@service/product";
import { PageWrapper } from "@components/Page";
import ProductForm from "./components/ProductForm";

export default function ItemAddPage() {
  async function handleSubmit(data) {
    try {
      if (data.images) {
        const imgFormData = new FormData();
        imgFormData.append("image", data.images);

        const { url } = await uploadProductImage(imgFormData);
        data.images = [url];
      }

      await addProduct(data);
    } catch (err) {
      throw err;
    }
  }

  return (
    <PageWrapper>
      <ProductForm onProductSubmit={handleSubmit} />
    </PageWrapper>
  );
}
