import styled from "@emotion/styled";
import { useWindowEvent } from "../../../hooks/useWindowEvent";
import { useAppDispatch } from "../../../redux/hooks";
import { uiSlice } from "../../../redux/ui";
import { Pagination } from "./Pagination";

export const AnswersView = () => {
  const dispatch = useAppDispatch();

  useWindowEvent("wheel", (e) => {
    /* Shift + wheel also means horizontal scrolling, but the app shouldn't be horizontally scrollable anyway. */
    if (!e.shiftKey) return;
    e.preventDefault();
    const isUp = e.deltaY > 0;
    dispatch(isUp ? uiSlice.actions.nextPage() : uiSlice.actions.prevPage());
  });

  return (
    <Root>
      <Pagination />
      <Pagination />
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: 24px;
  }
`;
