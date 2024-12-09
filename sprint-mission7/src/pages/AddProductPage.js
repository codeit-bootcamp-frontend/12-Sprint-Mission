import AddProductForm from "../components/AddProductForm";
import { createProduct } from "../api/api";

function AddProductPage() {
  return (
    <>
      <AddProductForm onSubmit={createProduct} />
    </>
  );
}

export default AddProductPage;
