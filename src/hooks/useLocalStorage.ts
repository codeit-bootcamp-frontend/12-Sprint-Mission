import { useState } from "react";

export default function useLocalStorage(key: string, initialValue: string[]) {
  const [state, setState] = useState<string[]>(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });

  function setValue(value: string[] | ((value: string[]) => string[])) {
    try {
      //useState의 setState에 callback을 넘기는 행동처럼 사용가능하도록
      const newValue = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(newValue));
      setState(newValue);
    } catch (err) {
      console.error(err);
    }
  }

  return [state, setValue] as const;
}
