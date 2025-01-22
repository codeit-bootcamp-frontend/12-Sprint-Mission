import { PageWrapper } from "@/components/Page";
import { ReactNode } from "react";
import UserWrapper from "./_components/UserWrapper";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <PageWrapper>
      <UserWrapper>{children}</UserWrapper>
    </PageWrapper>
  );
}
