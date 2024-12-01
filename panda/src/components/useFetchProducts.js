import { useState, useEffect } from "react";
import axios from "axios";

const useFetchProducts = (limit = 14, offset = 0) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://panda-market-api.vercel.app/products", {
          params: { limit, offset },
        });

        if (response.data && Array.isArray(response.data.list)) {
          setProducts(response.data.list);
        } else {
          setError("상품 데이터를 불러오는 데 문제가 발생했습니다.");
        }
      } catch (err) {
        console.error("상품 데이터를 불러오는 데 문제가 발생했습니다:", err);
        setError("상품 데이터를 불러오는 데 문제가 발생했습니다.");
      }
    };

    fetchProducts();
  }, [limit, offset]);

  return { products, error, setProducts };
};

export default useFetchProducts;
