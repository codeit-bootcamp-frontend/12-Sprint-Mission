export function debounce<T extends unknown[]>(
  func: (...args: T) => void,
  timeout: number = 300
) {
  let timer: ReturnType<typeof setTimeout>;

  return (...args: T) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
