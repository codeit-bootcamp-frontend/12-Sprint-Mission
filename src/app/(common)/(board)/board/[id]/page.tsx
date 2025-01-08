import { Temporary } from "@/components/ui";

export default async function BoardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <Temporary
      title="게시판 상세"
      description={`${id}의 상세페이지 : 준비중`}
    />
  );
}
