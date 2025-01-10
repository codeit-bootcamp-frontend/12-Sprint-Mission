import { Temporary } from "@/components/ui";

export default function NotFound() {
  return (
    <Temporary
      title={"존재하지 않는 페이지입니다."}
      description={"잘못된 주소로 접근하셨습니다."}
    />
  );
}
