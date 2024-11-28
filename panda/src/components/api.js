import axios from "axios";

// 상품 데이터 가져오기
export const fetchProducts = async (
  currentPage,
  pageSize,
  sortOption,
  searchQuery
) => {
  try {
    const response = await axios.get(
      "https://panda-market-api.vercel.app/products",
      {
        params: {
          page: currentPage,
          pageSize: pageSize, //
          orderBy: sortOption,
          keyword: searchQuery,
        },
      }
    );
    if (response.data && Array.isArray(response.data.list)) {
      return {
        products: response.data.list,
        totalCount: response.data.totalCount,
      };
    } else {
      throw new Error("Invalid response format");
    }
  } catch (error) {
    console.error("상품 데이터를 불러오는 데 문제가 발생했습니다:", error);
    throw error;
  }
};
