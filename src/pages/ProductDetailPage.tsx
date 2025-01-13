import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/section/Footer";
import Header from "../components/section/Header";
import ProductDetail from "../components/ProductDetail";
import ProductInquiry from "../components/ProductInquiry";
import Container from "../components/Container";
import style from "./ProductDetailPage.module.css"

interface ProductDetail {
  id: number;
  name: string;
  description: string;
  images: string;
  price: number;
  tags: string[];
  ownerNickname: string;
  favoriteCount: number;
  createdAt: number;
}

export default function ProductDetailPage() {

  const { productId } = useParams<{ productId: string }>();
  const productIdNumber = Number(productId);

  const [productDetail, setProductDetail] = useState<ProductDetail | null>(null);

  useEffect(() => {

    // 상세 페이지 상품 데이터 요청
    async function ProductDetailItems() {
      try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products/${productId}`);
        setProductDetail(response.data); // 해당 상품의 상세 정보 설정
      } catch (error) {
        console.error("error:", error);
      }
    }

    ProductDetailItems();
  }, [productId]); // 상품 ID가 변경될 때마다 상세 정보 요청

  return (
    <>
      <Header />

      <main id="sub">
        <Container>
          {productDetail ? (
            <ProductDetail productDetail={productDetail} />
          ) : (
            <p>상품을 찾을 수 없습니다.</p>
          )}

          <ProductInquiry productId={isNaN(productIdNumber) ? 0 : productIdNumber} />

          <div className={style.btnBox}>
            <Link to="/items" className={style.button}>
              <span>목록으로 돌아가기</span>
            </Link>
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}
