import { useEffect, useState } from "react";

export default function useLocalArray(key) {
  const [data, setData] = useState(() => {
    return JSON.parse(localStorage.getItem(key)) || [];
  });

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem(key));
    const current = JSON.stringify(data);

    if (prev !== current) {
      localStorage.setItem(key, current);
    }
  }, [data]);

  function addData(value) {
    setData((prev) => {
      const filtered = prev.filter((item) => item.value !== value).slice(0, 5);
      return [{ id: Date.now(), value }, ...filtered];
    });
  }

  function removeData(id) {
    setData((prev) => prev.filter((item) => item.id !== id));
  }

  function clearData() {
    setData([]);
  }

  return { data, addData, removeData, clearData };
}
