import { useState, useEffect } from "react";

const useGetProduct = (page, pageSize, orderBy) => {
  const [items, setItems] = useState();
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    getData({ pageSize, orderBy, page }).then((data) => {
      setItems(data);
      setTotalPages(Math.ceil(data.totalCount / pageSize));
    });
  }, [pageSize, orderBy, mode]);
  return {
    items,
    totalPages,
  };
};

export default useGetProduct;
