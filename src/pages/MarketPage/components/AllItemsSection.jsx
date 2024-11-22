import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../../api/itemApi";
import defaultImage from "../../../assets/images/image/img_default.png";
import { ReactComponent as HeartIcon } from "../../../assets/images/icons/ic_heart.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 4; // 모바일
  } else if (width < 1200) {
    return 6; // 태블릿
  } else {
    return 10; // 데스크`탑
  }
};

function AllItemsSection() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedItems = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  };

  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedItems({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pageSize]);

  return (
    <div className="allItemsContainer">
      <div className="allItemsSectionHeader">
        <h2 className="sectionTitle">전체 상품</h2>
        <div className="allItemsSectionHeaderRight">
          <div className="searchBarWrapper">
            <SearchIcon />
            <input
              className="searchBarInput"
              placeholder="검색할 상품을 입력해주세요"
            />
          </div>
          <Link to="/additem" className="addItemLinkButton button">
            상품 등록하기
          </Link>
        </div>
      </div>

      <div className="allItemsCardSection">
        {itemList?.map((item) => (
          <div key={item.id} className="itemCard">
            {item.images && item.images.length > 0 ? (
              <img src={item.images[0]} alt={item.name} className="itemImage" />
            ) : (
              <img src={defaultImage} alt={item.name} className="itemImage" />
            )}
            <h3 className="itemName">{item.name}</h3>
            <p className="itemPrice">{item.price.toLocaleString()}원</p>
            <div className="favoriteCount">
              <HeartIcon />
              {item.favoriteCount}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllItemsSection;
