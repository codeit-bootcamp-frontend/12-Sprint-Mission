import { GET_PRODUCT } from '@/utils/constant';
import { GetItemsParms, GetCommentsParams, GetItemsResponse, ItemDetail, GetCommentsResponse } from './types';

const getItems = async (params: GetItemsParms = {}): Promise<GetItemsResponse | undefined> => {
  const query = new URLSearchParams(JSON.parse(JSON.stringify(params))).toString();

  try {
    const response = await fetch(`${GET_PRODUCT.BASE_URL}?${query}`);
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const body: GetItemsResponse = await response.json();
    return body;
  } catch (error) {
    console.error('아이템 정보를 가져오는데 실패했습니다. ', error);
  }
};

const getItemDetail = async (id: string): Promise<ItemDetail | undefined> => {
  try {
    const response = await fetch(`${GET_PRODUCT.BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const body: ItemDetail = await response.json();
    return body;
  } catch (error) {
    console.error('아이템 상세 정보를 가져오는데 실패했습니다. ', error);
  }
};

const getItemComments = async (id: string, params: GetCommentsParams = { limit: 3, cursor: 0 }): Promise<GetCommentsResponse | undefined> => {
  const query = new URLSearchParams(JSON.parse(JSON.stringify(params))).toString();
  try {
    const response = await fetch(`${GET_PRODUCT.BASE_URL}/${id}/comments?${query}`);
    if (!response.ok) {
      throw new Error(`에러코드 : ${response.status}`);
    }
    const body: GetCommentsResponse = await response.json();
    return body;
  } catch (error) {
    console.error('아이템 댓글을 조회하는데 실패했습니다. ', error);
  }
};

export { getItems, getItemDetail, getItemComments };
