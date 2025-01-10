import backIcon from "./../assets/icon_back.svg";
import "./ProductDetailPage.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import DetailTop from "../components/DetailTop";
import DetailBtm from "../components/DetailBtm";

const ProductDetailPage = () => {
  const { id } = useParams();

  if (!id) {
    return <div className="error-message">잘못된 접근입니다.</div>;
  }

  return (
    <main className="main">
      <div className="inner">
        <div className="product_detail_wrap">
          <DetailTop id={id} />
          <DetailBtm id={id} />
          <div className="detail_btn">
            <Link to="/items" className="btn_blue lg">
              목록으로 돌아가기 <img src={backIcon} alt="목록으로 돌아가기" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailPage;
