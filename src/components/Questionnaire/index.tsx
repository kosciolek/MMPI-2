import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { questionCount } from "../../mmpi-2/utils";
import { Layout } from "../Layout";
import { Finished } from "./Finished";
import { Question } from "./Question";

export const Questionnaire = () => {
  const { path } = useRouteMatch();
  const match = useRouteMatch<{ questionId: string }>(`${path}/:questionId/`)!;

  if (!match) return <Redirect to={`${path}/1`} />;

  const { questionId } = match.params;
  const questionIdInt = parseInt(questionId, 10) - 1;

  if (questionIdInt === questionCount) return <Redirect to={`${path}/finished`} />;

  return (
    <Layout>
      <Switch>
        <Route path={`${path}/finished`}>
          <Finished />
        </Route>
        <Route path={`${path}/:questionId(\\d+)/`}>
          <Question id={questionIdInt} />
        </Route>
        <Redirect to={`${path}/1/`} />
      </Switch>
    </Layout>
  );
};
