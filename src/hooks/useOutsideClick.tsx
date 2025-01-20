import { useEffect, useRef } from "react";

export const useOutsideClick = (
  callback: () => void
): React.RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // contains를 이용하여 내부의 노드인지 확인
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    // 초기 이벤트 등록
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // 이벤트 해제
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback]);

  return ref;
};
