import React, { useEffect, useState } from "react";
import { getProducts } from '../../../api';
import CardProduct from './CardProduct';
import { ReactComponent as SortIcon } from "../../../assets/images/icons/ic_sort.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/ic_search.svg";
import { Link } from "react-router-dom";
import DropdownList from "./DropDownList";
import PaginationBar from "./PaginationBar";

const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
        // Mobile viewport
        return 4;
    } else if (width < 1280) {
        // Tablet viewport
        return 6;
    } else {
        // Desktop viewport
        return 10;
    }
};

function AllProduct() {
    const [orderBy, setOrderBy] = useState("recent");
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(getPageSize());
    const [itemList, setItemList] = useState([]);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [totalPageNum, setTotalPageNum] = useState();

    const fetchSortedData = async ({ orderBy, page, pageSize }) => {
        const products = await getProducts({ orderBy, page, pageSize });
        setItemList(products.list);
        setTotalPageNum(Math.ceil(products.totalCount / pageSize));
    };

    const handleSortSelection = (sortOption) => {
        setOrderBy(sortOption);
        setIsDropdownVisible(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        };

        // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
        window.addEventListener("resize", handleResize);
        fetchSortedData({ orderBy, page, pageSize });

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [orderBy, page, pageSize]);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const onPageChange = (pageNumber) => {
        setPage(pageNumber);
    };

    return (
        <div className="">
            <div className="allItemsSectionHeader">
                <h1 className="sectionTitle">판매 중인 상품</h1>
                <Link to="/additem" className="loginLink button">
                    상품 등록하기
                </Link>
            </div>

            <div className="allItemsSectionHeader">
                <div className="searchBarWrapper">
                    <SearchIcon />
                    <input
                        className="searchBarInput"
                        placeholder="검색할 상품을 입력해 주세요"
                    />
                </div>
                <div className="sortButtonWrapper">
                    <button
                        className="sortDropdownTriggerButton"
                        onClick={toggleDropdown}
                    >
                        <SortIcon />
                    </button>
                    {isDropdownVisible && (
                        <DropdownList onSortSelection={handleSortSelection} />
                    )}
                </div>
            </div>

            <div className="allItemsCardSection">
                {itemList?.map((item) => (
                    <CardProduct item={item} key={`market-item-${item.id}`} />
                ))}
            </div>

            <div className="paginationBarWrapper">
                <PaginationBar
                    totalPageNum={totalPageNum}
                    activePageNum={page}
                    onPageChange={onPageChange}
                />
            </div>
        </div>
    );
}

export default AllProduct;