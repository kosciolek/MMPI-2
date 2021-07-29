import styled from "@emotion/styled";
import { Helmet } from "react-helmet";
import { Trans, useTranslation } from "react-i18next";
import { Redirect } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { getAnswersReady } from "../../redux/mmpi/selectors";
import { Button } from "../Button";
import { Divider } from "../Divider";
import { Grid } from "../Grid";
import { HelmetTitle } from "../HelmetTitle";
import { Link } from "../Link";
import { Sidebar } from "../Sidebar";
import { Txt } from "../Txt";
import { DownloadAnswersButton } from "./DownloadAnswersButton";
import { GenderSelect } from "./GenderSelect";
import { Results } from "./Results";
import { UploadAnswersButton } from "./UploadAnswersButton";
import { ReactComponent as EditAnswersIcon } from "./manual-questions.svg";
import { ViewModeSelect } from "./ViewModeSelect";

export const Calculator = () => {
  const { t } = useTranslation();

  const answersReady = useAppSelector(getAnswersReady);
  if (!answersReady) return <Redirect to="./not-finished" />;

  return (
    <>
      <HelmetTitle title={t("Results")} />
      <RootGrid container>
        <Grid item xs={12} lg={9} style={{ padding: "24px" }}>
          <Results />
        </Grid>
        <Grid item xs={0} lg={3}>
          <Sidebar>
            <Link to="./answers">
              <Button noPadding left={<EditAnswersIcon />} color="neutral600">
                <span>
                  <Trans t={t}>
                    Edit <Txt color="primary">answers</Txt>
                  </Trans>
                </span>
              </Button>
            </Link>
            <DownloadAnswersButton />
            <UploadAnswersButton />
            <Divider />
            <ViewModeSelect />
            <GenderSelect />
            <Divider />
          </Sidebar>
        </Grid>
      </RootGrid>
    </>
  );
};

export const RootGrid = styled(Grid)`
  height: 100%;
`;
