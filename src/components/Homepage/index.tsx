import styled from "@emotion/styled/macro";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getIsFinished } from "../../redux/mmpi/selectors";
import { Button } from "../Button";
import { Grid } from "../Grid";
import { Layout } from "../Layout";
import { contentWidth } from "../Layout/utils";
import { Sidebar } from "../Sidebar";
import { ReactComponent as TestSvg } from "./homepage-test-icon.svg";
import { PreviousWarning } from "./PreviousWarning";

export const Homepage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Root container>
        <Grid item xs={12} md={9}>
          <Content>
            <WritingsWrapper>
              <Title>{t("MMPI - 2")}</Title>
              <Bar />
              <Subtitle>{t("Minnesota Multiphasic Personality Inventory - 2")}</Subtitle>
              <Buttons>
                <Link to="/questionnaire/">
                  <Button tabIndex={-1} size="big" variant="filled">
                    {t("Questionnaire")}
                  </Button>
                </Link>
                <Link to="/calculator/answers">
                  <Button tabIndex={-1} size="big" variant="outlined">
                    {t("Calculator")}
                  </Button>
                </Link>
              </Buttons>
              <PreviousWarning />
            </WritingsWrapper>
            <StyledTestSvg />
          </Content>
        </Grid>
        <Grid item xs={0} md={3}>
          <Sidebar />
        </Grid>
      </Root>
    </Layout>
  );
};

export const Root = styled(Grid)`
  margin: 0 auto;
  width: ${contentWidth};
  height: 100%;
`;
export const Content = styled.div`
  display: flex;
  grid-area: main;

  justify-content: center;
  padding-top: 64px;
`;
export const WritingsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 50%;
  margin-right: 48px;

  & > * + * {
    margin-top: 28px;
  }
`;
export const Buttons = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-auto-flow: column;
  justify-content: flex-start;
`;
export const Title = styled.h1`
  font-size: 100px;
  font-weight: bold;
  color: #3a83e2;
  background: -webkit-linear-gradient(180deg, #69bfe3, #194f94);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
  line-height: 1;
`;
export const Bar = styled.div`
  height: 16px;
  width: 18%;
  border-radius: 1000px;
  background-color: ${(p) => p.theme.colors.primary500};
`;
export const Subtitle = styled.p`
  color: ${(p) => p.theme.colors.neutral600};
  font-size: 26px;
  font-weight: bold;
`;
export const StyledTestSvg = styled(TestSvg)``;
