import { GET_PRODUCT } from 'utils/constant';

const getItems = async (params = {}) => {
  const query = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${GET_PRODUCT.BASE_URL}?${query}`);
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('아이템 정보를 가져오는데 실패했습니다. ', error);
  }
};

const getItemDetail = async (id) => {
  try {
    const response = await fetch(`${GET_PRODUCT.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('아이템 상세 정보를 가져오는데 실패했습니다. ', error);
  }
};

const getItemComments = async (id, params = { limit: 3, cursor: 0 }) => {
  const query = new URLSearchParams(params).toString();
  try {
    const response = await fetch(
      `${GET_PRODUCT.BASE_URL}/${id}/comments?${query}`
    );
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error('아이템 댓글을 조회하는데 실패했습니다. ', error);
  }
};

export { getItems, getItemDetail, getItemComments };
