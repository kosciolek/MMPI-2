import styled from "@emotion/styled";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import { Layout } from "../Layout";
import { contentWidth } from "../Layout/utils";
import { AnswersView } from "./AnswersView";
import { Calculator } from "./index";
import { NotFinished } from "./NotFinished";

export const CalculatorRouting = () => {
  const { path } = useRouteMatch();

  return (
    <Layout>
      <Root>
        <Switch>
          <Redirect exact from="/" to={`${path}/results`} />
          <Route path={`${path}/not-finished`} component={NotFinished} />
          <Route path={`${path}/answers`} component={AnswersView} />
          <Route path={`${path}/results`} component={Calculator} />
          <Redirect to={`${path}/results`} />
        </Switch>
      </Root>
    </Layout>
  );
};

export const Root = styled.div`
  width: ${contentWidth};
  margin: 0 auto;
  flex-grow: 1;
`;
