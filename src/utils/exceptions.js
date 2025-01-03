const HTTP_STATUS_CODE_MAPPER = {
  400: "잘못된 요청입니다.",
  401: "인증이 필요합니다",
  403: "접근 권한이 없습니다",
  404: "요청한 상품을 찾을 수 없습니다",
  500: "서버에 오류가 발생했습니다.",
};

export class HttpException extends Error {
  constructor(message, statusCode, response) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.response = response;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundException extends HttpException {
  constructor(details) {
    super(HTTP_STATUS_CODE_MAPPER[404], 404, details);
  }
}

export class UnauthorizedException extends HttpException {
  constructor(details) {
    super(HTTP_STATUS_CODE_MAPPER[401], 401, details);
  }
}

export class BadRequestException extends HttpException {
  constructor(details) {
    super(HTTP_STATUS_CODE_MAPPER[400], 400, details);
  }
}

export class InternalServerErrorException extends HttpException {
  constructor(details) {
    super(HTTP_STATUS_CODE_MAPPER[500], 500, details);
  }
}
