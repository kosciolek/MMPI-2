import React, { ComponentProps, useRef } from "react";
import { $callback } from "./utils";

export const useTextUpload = (
  onRead: (content: string, filename: string) => void,
  mimeType = "application/json"
) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const inputOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files) return;
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = () => {
        onRead(reader.result as string, file.name);
      };
      // eslint-disable-next-line no-empty
    } catch (_) {}
  };

  const inputProps: ComponentProps<"input"> = {
    accept: mimeType,
    type: "file",
    ref,
    style: { display: "none" },
    onChange: inputOnChange,
  };

  const triggerUpload = $callback(() => ref.current?.click());
  return { inputProps, triggerUpload };
};
