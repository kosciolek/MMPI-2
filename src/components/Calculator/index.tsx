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
    <div>
      <Switch>
        <Route path="/calculator/not-finished">
          <NotFinished />
        </Route>
        <Route path="/calculator/answers">
          <AnswersView />
        </Route>
        <Route>Calculator</Route>
      </Switch>
    </div>
  );
};
