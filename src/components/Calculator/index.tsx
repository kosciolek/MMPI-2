import styled from "@emotion/styled";
import { useEffect, useLayoutEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getAnswersReady } from "../../redux/mmpi/selectors";
import { AnswersView } from "./AnswersView";
import { NotFinished } from "./NotFinished";

export const Calculator = () => {
  const history = useHistory();

  const answersReady = useAppSelector(getAnswersReady);
  /*useLayoutEffect(() => {
    if (!answersReady) history.push("/calculator/not-finished");
  }, [history, answersReady]);*/
  return (
    <Root>
      <Area>
        <Switch>
          <Route path="/calculator/not-finished">
            <NotFinished />
          </Route>
          <Route path="/calculator/answers">
            <AnswersView />
          </Route>
          <Route>Calculator</Route>
        </Switch>
      </Area>
    </Root>
  );
};

export const Root = styled.div`
  display: grid;
  grid-area: main / sidebar;
  grid-template:
    "space-left main sidebar space-right" 1fr / 1fr 1000px minmax(200px, 350px)
    1fr;
`;
export const Area = styled.div`
  grid-area: main;
`;
