const BEST_CARD_CNT = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 4,
};

const TOTAL_CARD_CNT = {
  MOBILE: 4,
  TABLET: 6,
  DESKTOP: 10,
};

const PAGE_RELATION_NUMBER = {
  INIT_PAGE: 1,
  MAX_PAGINATION_SIZE: 5,
};

const ORDER = {
  RECENT: 'recent',
  FAVORITE: 'favorite',
  RECNET_TEXT: '최신순',
  FAVORITE_TEXT: '좋아요순',
};

const MEDIA_KEY = {
  MOBILE: '(max-width:768px)',
  TABLET: '(min-width: 769px) and (max-width: 1200px)',
};

const QUERY_PLACEHOLDER = {
  TEXT: '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.',
};

export {
  BEST_CARD_CNT,
  TOTAL_CARD_CNT,
  PAGE_RELATION_NUMBER,
  ORDER,
  MEDIA_KEY,
  QUERY_PLACEHOLDER,
};
