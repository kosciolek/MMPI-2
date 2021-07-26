import { memo } from "react";
import { useAppSelector } from "../../../../redux/hooks";
import { getFirstAnswer, getLastAnswer } from "../../../../redux/ui/selectors";
import { Answer } from "./Answer";

export const Answers = memo(() => {
  const first = useAppSelector(getFirstAnswer);
  const last = useAppSelector(getLastAnswer);
  const count = last - first;
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Answer key={`${first}-${i}`} index={first + i} />
      ))}
    </div>
  );
});
