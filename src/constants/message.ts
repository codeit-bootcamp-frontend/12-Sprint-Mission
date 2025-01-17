import { BoardName } from "@/types/comment";
import emptyProductCommentIcon from "@assets/img/icon/icon_inquiry_empty.svg";
import emptyArticleCommentIcon from "@assets/img/icon/icon_reply_empty.svg";

export const PRODUCT_VALIDATION_MESSAGE = {
  PRODUCT_IMAGE_REQUIRED: "이미지를 업로드해주세요",
  PRODUCT_TAGS_REQUIRED: "태그를 입력해주세요",
  PRODUCT_NAME_REQUIRED: "상품명을 입력해주세요",
  PRODUCT_DESCRIPTION_REQUIRED: "상품소개를 입력해주세요",
  PRODUCT_PRICE_REQUIRED: "판매 가격을 입력해주세요",
  PRODUCT_PRICE_MIN: "원 이상 입력해주세요",
  INVALID_STRING: "특수문자는 사용할 수 없습니다.",
  INVALID_NUMBER: "숫자만 입력해주세요",
  INVALID_IMAGE_TYPE: "지원하지않는 이미지 형식입니다.",
  INVALID_IMAGE_SIZE: "이미지 용량을 확인해주세요.",
  INVALID_IMAGE_COUNT: "1개만 업로드 가능합니다.",
};

export const COMMENT_VALIDATION_MESSAGE = {
  COMMENT_REQUIRED: "내용을 적어주세요",
};

export const AUTH_VALIDATION_MESSAGES = {
  EMAIL_REQUIRED: "이메일을 입력해주세요",
  INVALID_EMAIL: "잘못된 이메일 형식입니다.",
  PASSWORD_REQUIRED: "비밀번호를 입력해주세요.",
  PASSWORD_MIN_LENGTH: "비밀번호를 8자 이상 입력해주세요.",
  PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다.",
  USERNAME_REQUIRED: "닉네임을 입력해주세요",
};

export const ARTICLE_VALIDATION_MESSAGE = {
  ARTICLE_IMAGE_REQUIRED: "이미지를 업로드해주세요",
  ARTICLE_TITLE_REQUIRED: "제목을 입력해주세요",
  ARTICLE_CONTENT_REQUIRED: "내용을 입력해주세요",
  INVALID_IMAGE_TYPE: "지원하지않는 이미지 형식입니다.",
  INVALID_IMAGE_SIZE: "이미지 용량을 확인해주세요.",
  INVALID_IMAGE_COUNT: "1개만 업로드 가능합니다.",
};

export const COMMENT_PLACEHOLDER: Record<BoardName, string> = {
  articles: "댓글을 입력해주세요.",
  products:
    "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.",
};

export const COMMENT_TITLE: Record<BoardName, string> = {
  articles: "댓글달기",
  products: "문의하기",
};

export const COMMENT_SUBJECT: Record<BoardName, string> = {
  articles: "댓글",
  products: "문의",
};

export const COMMENT_LOADING: Record<BoardName, string> = {
  articles: "댓글을 더 불러오고 있습니다.",
  products: "문의를 더 불러오고 있습니다.",
};

export const COMMENT_EMPTY: Record<
  BoardName,
  { image: string; message: string }
> = {
  articles: {
    image: emptyArticleCommentIcon,
    message: "아직 댓글이 없어요.\n지금 댓글을 달아보세요!",
  },
  products: {
    image: emptyProductCommentIcon,
    message: " 아직 문의가 없어요",
  },
};

export const COMMENT_BACK_LINK: Record<BoardName, string> = {
  articles: "/boards",
  products: "/items",
};
