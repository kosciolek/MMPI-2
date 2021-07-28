import { useCallback, useMemo } from "react";

export const $memo = (
  factoryFunc: Parameters<typeof useMemo>[0],
  deps?: any[]
) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(factoryFunc, deps ?? []);

export const $callback = (
  factoryFunc: Parameters<typeof useCallback>[0],
  deps?: any[]
  // eslint-disable-next-line react-hooks/exhaustive-deps
) => useCallback(factoryFunc, deps ?? []);
