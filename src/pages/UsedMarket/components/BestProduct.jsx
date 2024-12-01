import React, { useEffect, useState } from "react";
import { getProducts } from '../../../api';
import CardProduct from './CardProduct';

const getPageSize = () => {
    const width = window.innerWidth;
    if (width < 768) {
        // Mobile viewport
        return 1;
    } else if (width < 1280) {
        // Tablet viewport
        return 2;
    } else {
        // Desktop viewport
        return 4;
    }
};

function BestProduct() {
    const [itemList, setItemList] = useState([]);
    const [pageSize, setPageSize] = useState(getPageSize());

    const fetchSortedData = async ({ orderBy, pageSize }) => {
        const products = await getProducts({ orderBy, pageSize });
        setItemList(products.list);
    };

    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        };

        window.addEventListener("resize", handleResize);
        fetchSortedData({ orderBy: "favorite", pageSize });

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [pageSize]);

    return (
        <div className="bestItemsContainer">
            <p className="sectionTitle">베스트 상품</p>
            <div className="bestItemsCardSection">
                {itemList?.map((item) => (
                    <CardProduct item={item} key={`best-item-${item.id}`} />
                ))}
            </div>
        </div>
    );
}

export default BestProduct;
