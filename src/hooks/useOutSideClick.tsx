import { useEffect } from "react";

function useOutSideClick(ref: React.RefObject<HTMLElement>, callback?: () => void) {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !target.closest('[data-menu="button"]') // 버튼에 data-menu="button" 줘야함.
      ) {
        callback?.();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => window.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
}

export default useOutSideClick;
