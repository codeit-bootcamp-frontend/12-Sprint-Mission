import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../api";
import LoadingSpinner from "./components/LoadingSpinner";

function ItemPage() {

    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);


    const { productId } = useParams();

    useEffect(() => {
        async function fetchProduct() {
            if (!productId) {
                setError("상품 아이디가 제공되지 않았어요.");
                setIsLoading(false);
                return;
            }

            setIsLoading(true);
            try {
                const data = await getProductDetail(productId);
                if (!data) {
                    throw new Error("해당 상품의 데이터를 찾을 수 없습니다.");
                }
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchProduct();
    }, [productId]);


    if (error) {
        alert(`오류: ${error}`);
    }

    if (!productId || !product) return null;

    return (
        <>
            <LoadingSpinner isLoading={isLoading} />
            <div>
                안녕하세요.
            </div>
        </>
    )
}

export default ItemPage;