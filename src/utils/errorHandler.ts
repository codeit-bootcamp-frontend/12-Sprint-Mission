import {
  HttpException,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  InternalServerErrorException,
} from "./exceptions";

export const handleResponseError = (response: Response) => {
  console.error(`HTTP Error: ${response.status} ${response.statusText}`);

  switch (response.status) {
    case 400:
      throw new BadRequestException(response);
    case 401:
      throw new UnauthorizedException(response);
    case 404:
      throw new NotFoundException(response);
    case 500:
      throw new InternalServerErrorException(response);
    default:
      throw new HttpException(`오류가 발생했습니다. (에러 코드: ${response.status})`, response.status, response);
  }
};
