import React, { useEffect, useState } from "react";
import { getProducts } from '../../../api';
import CardProduct from './CardProduct';

function AllProduct() {
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
        <div className="allItemsCardSection">
            {items?.map((item) => (
                <CardProduct item={item} key={`market-item-${item.id}`} />
            ))}
        </div>
    )
}

export default AllProduct;