import productImg from "./../assets/item.png";
import wishIcon from "./../assets/icon_wish.svg";
import useApi from "./../hooks/useApi";
import ProfileBox from "./ProfileBox";

const DetailTop = ({ id }) => {
  const { data, loading, error } = useApi(`https://panda-market-api.vercel.app/products/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return null;
  }

  return (
    <div className="product_detail_item">
      <div className="thum">
        <img src={data.images && data.images[0] ? data.images[0] : productImg} alt={data.name} onError={(e) => (e.target.src = productImg)} />
      </div>
      <div className="content">
        <div className="tit">{data.name}</div>
        <div className="price">{data.price.toLocaleString("ko-KR")}원</div>
        <div className="info">
          <p>상품 소개</p>
          <div className="desc">{data.description}</div>
        </div>
        <div className="info">
          <p>상품 태그</p>
          <ul className="tag">
            {data.tags.map((el) => (
              <li key={el}>#{el}</li>
            ))}
          </ul>
        </div>
        <div className="profile_box">
          <ProfileBox name={data.ownerNickname} date={data.createdAt} />

          <button className="btn_reset wish_area">
            <div className="icon">
              <img src={wishIcon} alt="" />
            </div>
            <div className="numb">{data.favoriteCount}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailTop;
