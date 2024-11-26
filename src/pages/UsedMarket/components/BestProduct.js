import React, { useEffect, useState } from "react";
import { getProducts } from '../../../api';
import CardProduct from './CardProduct';

function BestProduct() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const result = await getProducts();
                console.log("Result from getProducts:", result);
                setItems(result.list);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, []);
    // console.log('here!!!' + items + 'l');
    return (
        <>
            <p>베스트 상품</p>
            {items?.map((item) => (
                <CardProduct item={item} key={`best-item-${item.id}`} />
            ))}
        </>
    );
}

export default BestProduct;
