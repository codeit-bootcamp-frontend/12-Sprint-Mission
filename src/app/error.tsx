"use client";

import { Temporary } from "@/components/ui";

export default function Error({ error }: { error: Error }) {
  return (
    <Temporary
      title={"문제가 발생했습니다."}
      description={error.message || "알 수 없는 에러가 발생했습니다."}
    />
  );
}
