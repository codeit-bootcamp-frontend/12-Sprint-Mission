import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import {
  getProduct,
  modifyProduct,
  uploadProductImage,
} from "@service/product";
import { PageWrapper } from "@components/Page";
import ProductForm from "./components/ProductForm";

export default function ItemModifyPage() {
  const { detail } = useLoaderData();
  const {
    auth: { user },
  } = useAuth();

  if (user && user.id !== detail.ownerId) {
    alert("권한이 없습니다.");
    return <Navigate to="/items" replace />;
  }

  const initialData = {
    ...detail,
    images: detail.images[0],
  };

  async function handleSubmit(data) {
    try {
      if (data.images !== detail.images[0]) {
        const imgFormData = new FormData();
        imgFormData.append("image", data.images);

        const { url } = await uploadProductImage(imgFormData);
        data.images = [url];
      }

      await modifyProduct(detail.id, data);
    } catch (err) {
      throw err;
    }
  }

  return (
    <PageWrapper>
      <ProductForm
        initialData={initialData}
        onProductSubmit={handleSubmit}
        isEdit
      />
    </PageWrapper>
  );
}

async function loader({ params }) {
  const { id } = params;
  const detail = await getProduct(id);

  return { detail };
}

ItemModifyPage.loader = loader;
