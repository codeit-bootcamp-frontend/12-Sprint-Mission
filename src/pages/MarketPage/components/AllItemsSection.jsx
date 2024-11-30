import { useEffect, useState } from 'react';
import { getProducts } from '../../../api/api';
import ItemCard from './ItemCard';
import Pagination from '../../../components/Layout/Pagination';
import Selector from '../../../components/Layout/Selector';
import { Link } from 'react-router-dom';

function AllItemsSection() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [orderBy, setOrderBy] = useState('recent');
  const [page, setPage] = useState(1);
  const [itemsCnt, setItemsCnt] = useState(0);
  const [keyword, setKeyword] = useState('');

  const getData = async (options) => {
    const { list, totalCount } = await getProducts(options);
    setItems(list);
    setItemsCnt(totalCount);
  };

  const getPageSize = () => {
    const width = window.innerWidth;
    if (width > 1200) setPageSize(10);
    else if (width > 768) setPageSize(6);
    else setPageSize(4);
  };

  const onPageChange = (pageNum) => setPage(pageNum);

  const onOrderByChange = (orderBy) => setOrderBy(orderBy);

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  useEffect(() => {
    window.addEventListener('resize', getPageSize);
    getData({ page, pageSize, orderBy, keyword });
    console.log(keyword);
  }, [page, pageSize, orderBy, keyword]);

  return (
    <div className="allItemsSection">
      <div className="allItemsSectionHeader">
        <h1 className="sectionTitle">전체 상품</h1>
        <div className="allItemsSectionHeaderRight">
          <input
            placeholder="      검색할 상품을 입력해주세요"
            className="searchInput"
            type="text"
            value={keyword}
            onChange={handleKeywordChange}
          />
          <Link to="/addItem">
            <button className="btn btn-sm-48">상품 등록하기</button>
          </Link>
          <Selector onOrderByChange={onOrderByChange} />
        </div>
      </div>
      <div className="itemsSection">
        {items.map((item) => {
          return <ItemCard item={item} key={item.id} />;
        })}
      </div>
      <Pagination
        currentPage={page}
        onPageChange={onPageChange}
        totalPage={Math.ceil(itemsCnt / pageSize)}
      />
    </div>
  );
}

export default AllItemsSection;
