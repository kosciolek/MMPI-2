import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";
import {Redirect, useRouteMatch } from "react-router-dom";
import { useNotification } from "../../hooks/notifications";
import { useAppSelector } from "../../redux/hooks";
import {getAnswersReady, getFinalScaleValues} from "../../redux/mmpi/selectors";
import { Button } from "../Button";
import { Grid } from "../Grid";
import { Link } from "../Link";
import { Sidebar } from "../Sidebar";
import { Txt } from "../Txt";
import { DownloadAnswersButton } from "./DownloadAnswersButton";
import { UploadAnswersButton } from "./UploadAnswersButton";
import { ReactComponent as EditAnswersIcon } from "./manual-questions.svg";

export const Calculator = () => {
  const { t } = useTranslation();

  const results = useAppSelector(getFinalScaleValues);

  const answersReady = useAppSelector(getAnswersReady);
  if (!answersReady) return <Redirect to="./not-finished" />;

  return (
    <RootGrid container>
      <Grid item xs={12} lg={9} style={{ padding: "24px" }}>
        {JSON.stringify(results, null, 2)}
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
        </Sidebar>
      </Grid>
    </RootGrid>
  );
};

export const RootGrid = styled(Grid)`
  height: 100%;
`;
