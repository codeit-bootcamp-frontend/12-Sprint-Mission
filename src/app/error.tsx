"use client";

import { Temporary } from "@/components/ui";

export default function Error() {
  return (
    <Temporary
      title={"알수없는 에러가 발생했습니다."}
      description={"문제가 발생했습니다."}
    />
  );
}
