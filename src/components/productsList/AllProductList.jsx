import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GetProductsAPI } from "../../api/GetProductsAPI";
import "./AllProductList.css";
import favoriteIcon from "../../assets/favorite_icon.png";
import defaultImg from "../../assets/logo.png";

function AllProductList() {
  const [allProducts, setAllProducts] = useState([]);
  const [orderBy, setOrderBy] = useState();
  const [keyword, setKeyword] = useState();
  const imageSize = "220px";

  const loadAllProducts = async () => {
    try {
      const data = await GetProductsAPI({
        page: 1,
        pageSize: 10,
        orderBy: orderBy,
        keyword: keyword,
      });
      // console.log(data);
      setAllProducts(data);
    } catch (error) {
      throw new Error("전체 상품 로드 실패:", error);
    }
  };

  useEffect(() => {
    loadAllProducts();
  }, [orderBy, keyword]);

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
  };

  const onErrorImg = (e) => {
    e.target.src = defaultImg;
  };

  const searchProducts = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <section className="allProdcutContainer">
      <div className="allProducts-nav">
        <h3 className="title">전체 상품</h3>
        <div className="allProducts-nav-right">
          <input
            className="search"
            placeholder="검색할 상품을 입력해주세요."
            value={keyword}
            onChange={searchProducts}
          ></input>
          <Link to="/addproduct">
            <button className="registerButton">상품 등록하기</button>
          </Link>
          <select
            className="sortButton"
            value={orderBy}
            onChange={handleOrderChange}
          >
            <option className="sortOption" value="recent">
              최신순
            </option>
            <option className="sortOption" value="favorite">
              좋아요순
            </option>
          </select>
        </div>
      </div>
      <div className="allProducts">
        {allProducts.map((product) => (
          <div className="allProduct" key={product.id}>
            <img
              className="productImage"
              src={product.images[0]}
              alt="전체 상품 이미지"
              style={{
                width: imageSize,
                height: imageSize,
              }}
              onError={onErrorImg}
            />
            <div className="content">
              <p className="name">{product.name}</p>
              <p className="price">{product.price.toString()}</p>
              <div className="favorite">
                <img src={favoriteIcon} alt="좋아요 버튼" />
                <p className="favoriteCount">
                  {product.favoriteCount.toString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AllProductList;
