import { Navigate, useLoaderData } from "react-router-dom";
import { useAuth } from "@context/AuthContext";
import { PageWrapper } from "@components/Page";
import ProductForm from "./components/ProductForm";
import useProductActions from "./components/useProductActions";
import { Product } from "@type/product";

export default function ItemModifyPage() {
  const { detail } = useLoaderData() as { detail: Product };
  const {
    auth: { user },
  } = useAuth();
  const { handleProductModify } = useProductActions(detail.id);

  if (user && user.id !== detail.ownerId) {
    alert("권한이 없습니다.");
    return <Navigate to="/items" replace />;
  }

  return (
    <PageWrapper>
      <ProductForm
        initialData={detail}
        onProductSubmit={handleProductModify}
        isEdit
      />
    </PageWrapper>
  );
}
