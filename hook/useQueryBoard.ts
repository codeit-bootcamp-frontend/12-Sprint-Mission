import { axiosIntance } from "@/pages/api/axiosInstance";
import { useEffect, useState } from "react";

type UseQueryProps = {
  queryUrl: string;
  disabled?: boolean;
};

type useQueryResult<T> = {
  data: T | null;
  loading: boolean;
};

export const useQueryArticles = <T>({
  queryUrl,
  disabled = false,
}: UseQueryProps): useQueryResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = async () => {
      try {
        const response = await axiosIntance.get<T>(queryUrl);
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        // setTimeout을 적용하지 않으니 원인 불명으로 Loading 기능이 정상 작동하지 않아 api의 이미지가 불러와지는 동안 레이아웃이 하얗게 보이는 현상이 일어난다. setTimeout을 넣어주니 Loading이 정상 작동 하지만 네트워크 속도가 빠를 때에도 스켈레톤이 무조건 보이게 되어 좋은 방향은 아닌 것 같다..
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500);

        () => clearTimeout(timer);
      }
    };

    if (!disabled) {
      query();
    }
  }, [queryUrl]);

  return { data, loading };
};
