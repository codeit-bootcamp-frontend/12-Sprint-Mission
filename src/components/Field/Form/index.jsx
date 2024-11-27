import Alert from "@components/Alert";
import LoadingSpinner from "@components/LoadingSpinner";

export default function ProductForm({ isLoading, error, onSubmit, children }) {
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
