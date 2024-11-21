import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useFilteredSearchParams(initialParams) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState(() => ({
    ...initialParams,
    ...Object.fromEntries(searchParams.entries()),
  }));

  useEffect(() => {
    // 값이 없는 쿼리는 URL에 표시안되게 필터링
    const filteredParams = Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
    setSearchParams(filteredParams);
  }, [params]);

  return [params, setParams];
}
