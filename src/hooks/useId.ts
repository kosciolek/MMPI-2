import { useState } from "react";

export const useId = () => {
  const [id] = useState(() => Math.random().toString());
  return id;
};
