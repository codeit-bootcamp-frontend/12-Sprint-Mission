import { PropsWithChildren } from "react";
import { Alert, LoadingSpinner } from "@components/ui";

interface FormProps extends PropsWithChildren {
  isLoading: boolean;
  error?: string;
  action: (data: FormData) => void;
}

export function ServerForm({ isLoading, error, action, children }: FormProps) {
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && <Alert mode="error">{error || "오류가 발생했습니다."}</Alert>}
      <form action={action}>{children}</form>
    </>
  );
}
