import { PageWrapper } from "@/components/Page";
import { ReactNode } from "react";

export default function ItemDetailLayout({
  detail,
  comments,
  children,
}: {
  detail: ReactNode;
  comments: ReactNode;
  children: ReactNode;
}) {
  return (
    <PageWrapper>
      {children}
      {detail}
      {comments}
    </PageWrapper>
  );
}
