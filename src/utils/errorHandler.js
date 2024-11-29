const errorMessages = {
  400: "잘못된 요청입니다.",
  401: "인증이 필요합니다",
  403: "접근 권한이 없습니다",
  404: "요청한 상품을 찾을 수 없습니다",
};

export const handleResponseError = (response) => {
  let errorMessage =
    errorMessages[response.status] || `클라이언트 오류가 발생했습니다. (에러 코드: ${response.status})`;

  if (response.status >= 500 && response.status < 600) {
    errorMessage = "서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
  }

  console.error(`HTTP Error: ${response.status} ${response.statusText}`);

  const error = new Error(errorMessage);
  error.statusCode = response.status;
  throw error;
};
