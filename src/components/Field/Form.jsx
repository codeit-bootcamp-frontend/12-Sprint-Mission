import { Alert, LoadingSpinner } from "@components/ui";

export function Form({ isLoading, error, onSubmit, children }) {
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
