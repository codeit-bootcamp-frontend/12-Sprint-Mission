import { PageWrapper } from "@/components/Page";
import { ReactNode } from "react";

export default function dss({
  all,
  best,
  children,
}: {
  all: ReactNode;
  best: ReactNode;
  children: ReactNode;
}) {
  return (
    <PageWrapper>
      {best}
      {all}
      {children}
    </PageWrapper>
  );
}
