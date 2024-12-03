import { Temporary } from "@components/ui";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let title = "알수없는 에러가 발생했습니다.";
  let description = "문제가 발생했습니다.";

  if (error.status === 500) {
    description = error.message;
  }

  if (error.status === 404) {
    title = "페이지를 찾을 수 없습니다.";
    description = "요청하신 페이지가 존재하지 않습니다.";
  }

  return <Temporary title={title} description={description} />;
}
