import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Layout } from "../Layout";
import { Question } from "./Question";

export const Questionnaire = () => {
  const { path } = useRouteMatch();
  const {
    params: { questionId },
  } = useRouteMatch<{ questionId: string }>(`${path}/:questionId/`)!;
  const questionIdInt = parseInt(questionId, 10) - 1;

  return (
    <Layout>
      <Switch>
        <Route path={`${path}/:questionId/`}>
          <Question id={questionIdInt} />
        </Route>
        <Redirect to={`${path}/1/`} />
      </Switch>
    </Layout>
  );
};
