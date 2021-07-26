import styled from "@emotion/styled";
import { useWindowEvent } from "../../../hooks/useWindowEvent";
import { useAppDispatch } from "../../../redux/hooks";
import { uiSlice } from "../../../redux/ui";
import {Answers} from "./Answers";
import { Pagination } from "./Pagination";

export const AnswersView = () => {
  const dispatch = useAppDispatch();

  useWindowEvent(
    "wheel",
    (e) => {
      if (!e.shiftKey) return;
      e.preventDefault();
      const isUp = e.deltaY > 0;
      dispatch(isUp ? uiSlice.actions.nextPage() : uiSlice.actions.prevPage());
    },
    { passive: false }
  );

  return (
    <Root>
      <Pagination />
      <Answers />
      <Pagination />
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  & > * + * {
    margin-top: 8px;
  }
`;
