import {useCallback, useMemo} from "react";

export const $memo = (factoryFunc: Parameters<typeof useMemo>[0], deps?: any[]) =>
  useMemo(factoryFunc, deps ?? []);

export const $callback = (
  factoryFunc: Parameters<typeof useCallback>[0],
  deps?: any[]
) => useCallback(factoryFunc, deps ?? []);
