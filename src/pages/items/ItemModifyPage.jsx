import { Navigate, useLoaderData } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { PageWrapper } from "@components/Page";
import ProductForm from "./components/ProductForm";
import useProductActions from "./components/useProductActions";

export default function ItemModifyPage() {
  const { detail } = useLoaderData();
  const {
    auth: { user },
  } = useAuth();
  const { handleProductModify } = useProductActions(detail.id);

  if (user && user.id !== detail.ownerId) {
    alert("권한이 없습니다.");
    return <Navigate to="/items" replace />;
  }

  const initialData = {
    ...detail,
    images: detail.images[0],
  };

  return (
    <PageWrapper>
      <ProductForm
        initialData={initialData}
        onProductSubmit={(formData) => handleProductModify(detail, formData)}
        isEdit
      />
    </PageWrapper>
  );
}
