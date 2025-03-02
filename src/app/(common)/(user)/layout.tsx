import { PageWrapper } from "@/components/Page";
import { ReactNode } from "react";
import UserWrapper from "@/components/user/UserWrapper";

export default function UserLayout({ children }: { children: ReactNode }) {
  return (
    <PageWrapper>
      <UserWrapper>{children}</UserWrapper>
    </PageWrapper>
  );
}
