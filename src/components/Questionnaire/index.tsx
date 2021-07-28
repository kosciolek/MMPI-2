import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Layout } from "../Layout";
import { Question } from "./Question";

export const Questionnaire = () => {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <Switch>
        <Route path={`${path}/:questionId/`}>
          <Question />
        </Route>
        <Redirect to={`${path}/1/`} />
      </Switch>
    </Layout>
  );
};
