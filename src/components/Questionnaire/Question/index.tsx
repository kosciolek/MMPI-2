import { useParams } from "react-router-dom";

export const Question = () => {
  const { questionId } = useParams<{ questionId: string }>();

  return <div>question {questionId ?? "no id"}</div>;
};
