import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../Components/ProductDetail/ProductDetail";
import ItemListNav from "../../Components/App/ItemsListNav";
import InquiryRegister from "../../Components/ProductDetail/InquiryRegister";
import { getComments, getProductId } from "../../Api/api";
import { TCommentDataProps, TProductDataProps } from "./types";

function ProductDetailPage() {
  const [productData, setProductData] = useState<TProductDataProps>();
  const [commentsData, setCommentsData] = useState<TCommentDataProps>();
  const [Loading, setLoading] = useState(true);

  const params = useParams();
  const productId = params.id;

  // API
  useEffect(() => {
    getProductId(productId, setProductData, setLoading);
  }, []);

  useEffect(() => {
    getComments(productId, setCommentsData);
  }, []);

  return (
    <>
      <ItemListNav />
      <ProductDetail productData={productData} Loading={Loading} />
      <InquiryRegister commentsData={commentsData} />
    </>
  );
}

export default ProductDetailPage;
