import { FormEvent, PropsWithChildren } from "react";
import { Alert, LoadingSpinner } from "@components/ui";

interface FormProps extends PropsWithChildren {
  isLoading: boolean;
  error: Error | null;
  onSubmit: (e: FormEvent) => void;
}

export function Form({ isLoading, error, onSubmit, children }: FormProps) {
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {error && (
        <Alert mode="error">{error.message || "오류가 발생했습니다."}</Alert>
      )}
      <form onSubmit={onSubmit}>{children}</form>
    </>
  );
}
