export const debounce = <T>(fn: (args: T[]) => void, delay: number) => {
  let timer: NodeJS.Timeout | null = null;

  return (args: T[]) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(args);
    }, delay);
  };
};
