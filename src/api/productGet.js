const getItems = async (params = {}) => {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('아이템 정보를 가져오는데 실패했습니다. ', error);
    throw error;
  }
};

export default getItems;
