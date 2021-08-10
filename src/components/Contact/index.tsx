import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";
import { media } from "../../hooks/media";
import { HelmetTitle } from "../HelmetTitle";
import { Layout } from "../Layout";
import { contentWidth } from "../Layout/utils";
import { Txt } from "../Txt";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <HelmetTitle title={t("contact")} />
      <Layout>
        <Root>
          <div>
            <Trans t={t} i18nKey='written by'>
              Written by <Txt color="primary">Juliusz Kościołek</Txt> for Przychodnia Psychiatryczna
              "Otmęt" w Krapkowicach.
            </Trans>
          </div>
          <div>
            <Trans t={t} i18nKey='do not contact'>
              Please do not contact the clinic for any questionnaire related questions.
            </Trans>
          </div>
          <div>
            <Trans t={t} i18nKey='reachable via'>
              The author is reachable via{" "}
              <a href="mailto:juliusz@kosciolek.dev">
                <Address>juliusz@kosciolek.dev</Address>
              </a>
            </Trans>
          </div>
        </Root>
      </Layout>
    </>
  );
};

export const Root = styled.div`
  margin: 0 auto;
  height: 100%;
  width: ${contentWidth};
  text-align: center;

  padding: 16px;

  ${media.md} {
    padding: 64px;
  }

  & > * + * {
    margin-top: 16px;
  }
`;
export const Address = styled.address`
  display: inline;
  font-style: normal;
  font-family: monospace;
  color: ${(p) => p.theme.colors.primary};
`;
