import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Finished } from "./Finished";
import { Question } from "./Question";

export const Questionnaire = () => {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route path={`${path}/:questionId/`}>
        <Question />
      </Route>
      <Redirect to={`${path}/1/`} />
    </Switch>
  );
};
