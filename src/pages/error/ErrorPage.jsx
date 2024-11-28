import { Temporary } from "@components/ui";

export default function ErrorPage() {
  return (
    <Temporary
      title="페이지를 찾을 수 없습니다."
      description="요청하신 페이지가 존재하지 않습니다."
    />
  );
}
