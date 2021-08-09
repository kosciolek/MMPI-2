import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { useTransition } from "react-spring";
import { questionCount } from "../../mmpi-2/utils";
import { Layout } from "../Layout";
import { Question } from "./Question";

export const Questionnaire = () => {
  const { path } = useRouteMatch();
  const match = useRouteMatch<{ questionId: string }>(`${path}/:questionId/`)!;

  if (!match) return <Redirect to={`${path}/1`} />;

  const { questionId } = match.params;
  const questionIdInt = parseInt(questionId, 10) - 1;
  if (Number.isNaN(questionIdInt) || questionIdInt > questionCount || questionIdInt < 0)
    return <Redirect to="/questionnaire/1" />;

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
