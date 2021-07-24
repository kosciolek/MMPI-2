import { useCallback, useState } from "react";

export const useRerender = () => {
  const [_, setState] = useState(false);
  return useCallback(() => setState((prev) => !prev), []);
};
