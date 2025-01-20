import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../section/Footer";
import Header from "../section/Header";
import ProductDetail from "../ProductDetail";
import ProductInquiry from "../ProductInquiry";

export default function ProductDetailPage() {

  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState([]); // 상세 페이지 데이터 상태

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
        <div className="contentBox">
          <div className="productDetailBox">
            <div className="detailBox">
              <div className="container">
                {productDetail ? (
                  <ProductDetail productDetail={productDetail} />
                ) : (
                  <p>상품을 찾을 수 없습니다.</p>
                )}

                <ProductInquiry productId={productId} />

                <div className="btnBox">
                  <Link to="/items" className="comBtn">
                    <span>목록으로 돌아가기</span>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
