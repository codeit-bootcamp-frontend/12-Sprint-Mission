import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { getProducts } from "../../../api/itemApi";
import LoadingSpinner from "../../../components/UI/LoadingSpinner";

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

interface Product {
    id: number;
    name: string;
    price: number;
    images: string[]; // 상품 이미지 URL 배열
    favoriteCount: number; // 좋아요 수
}

function BestItemsSection() {
    const [itemList, setItemList] = useState<Product[]>([]);
    const [pageSize, setPageSize] = useState(getPageSize());
    const [isLoading, setIsLoading] = useState(true);

    const fetchSortedData = async ({
        orderBy,
        pageSize,
    }: {
        orderBy: string;
        pageSize: number;
    }) => {
        setIsLoading(true);
        try {
            const products = await getProducts({ orderBy, pageSize });
            setItemList(products.list);
        } catch (error) {
            if (error instanceof Error) {
                console.error("오류: ", error.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setPageSize(getPageSize());
        };

        // 화면 크기 변경할 때마다 pageSize를 다시 계산해 넣음
        window.addEventListener("resize", handleResize);
        fetchSortedData({ orderBy: "favorite", pageSize });

        // Cleanup function
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [pageSize]);

    return (
        <>
            <LoadingSpinner isLoading={isLoading} />

            <div className="bestItemsContainer">
                <h1 className="sectionTitle">베스트 상품</h1>

                <div className="bestItemsCardSection">
                    {itemList?.map((item) => (
                        <ItemCard item={item} key={`best-item-${item.id}`} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default BestItemsSection;
