import _ from "lodash";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function useSyncParams(initialParams) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [params, setParams] = useState(() => ({
    ...initialParams,
    ...Object.fromEntries(searchParams.entries()),
  }));

  // params가 업데이트될때마다 url주소 업데이트
  // (값이 없는 쿼리는 표시안되게 필터링해서)
  useEffect(() => {
    const filteredParams = Object.entries(params).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    const current = Object.fromEntries(searchParams.entries());
    if (_.isEqual(filteredParams, current)) return;

    setSearchParams(filteredParams);
  }, [params]);

  return [params, setParams];
}
