import { useCallback, useState } from "react";

export const useId = () => {
  const [id] = useState(() => Math.random().toString());
  return id;
};

export const useIds = () => useCallback(() => Math.random().toString(), []);
