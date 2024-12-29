import { HTMLAttributes, ReactNode } from "react";
import { LoadingSpinner, Message } from "@components/ui";
import { Product } from "@type/product";

interface ListProps extends HTMLAttributes<HTMLUListElement> {
  items: Product[];
  renderItem: (item: Product) => ReactNode;
  isLoading: boolean;
  error: Error | null;
  message: {
    emptyMessage: string;
    errorMessage: string;
  };
  itemClassName: string;
}

export function List({
  items,
  renderItem,
  isLoading,
  error,
  message: {
    emptyMessage = "항목이 없습니다.",
    errorMessage = "문제가 생겨 정보를 가져오지 못했습니다.",
  },
  itemClassName = "",
  ...props
}: ListProps) {
  if (error) {
    return <Message>{errorMessage}</Message>;
  }

  if (!items.length && !isLoading) {
    return <Message>{emptyMessage}</Message>;
  }

  return (
    <>
      {isLoading && <LoadingSpinner position="absolute" light />}
      <ul {...props}>
        {items.map((item, index) => (
          <li key={item.id || index} className={itemClassName}>
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </>
  );
}
