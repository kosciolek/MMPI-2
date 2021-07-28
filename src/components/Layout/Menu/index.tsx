import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { Button } from "../../Button";
import { Grid } from "../../Grid";
import { Link } from "../../Link";
import { contentWidth, isDesktopLayout } from "../utils";
import { ReactComponent as GithubSvg } from "./github.svg";
import { LanguageMenu } from "./LanguageMenu";
import { MobileIcon } from "./MobileIcon";
import { MobileMenu } from "./MobileMenu";

export const Menu = () => {
  const { t } = useTranslation();
  return (
    <Root>
      <Grid container area="main">
        {/* todo */}
        <Grid item xs={12} lg={9}>
          <Left>
            <MobileIcon />
            <LanguageMenuWrapper>
              <LanguageMenu />
            </LanguageMenuWrapper>
            <Link transparent to="/contact">
              <Contact>{t("contact")}</Contact>
            </Link>
          </Left>
        </Grid>
        <Grid item lg={3} xs={0}>
          <Right>
            <Link
              transparent
              to="//github.com/kosciolek/MMIP-2"
              target="_blank"
            >
              <GithubButton>
                <StyledGithubSvg />
              </GithubButton>
            </Link>
          </Right>
        </Grid>
      </Grid>
      <MobileMenu />
    </Root>
  );
};

export const Root = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.colors.primary100};
  position: relative;
  display: grid;
  grid-template: "space-left main space-right" 80px / 1fr ${contentWidth} 1fr;
`;
export const Left = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
  flex-grow: 1;
  margin: 0 24px;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  padding-left: 24px;
  height: 100%;
  flex-grow: 1;
  border-left: 1px solid ${(p) => p.theme.colors.primary100};
`;
export const GithubButton = styled(Button)`
  padding: 0;
`;
export const StyledGithubSvg = styled(GithubSvg)`
  fill: ${(p) => p.theme.colors.primary};
`;
export const Contact = styled(Button)`
  font-size: 14px;
  font-weight: 500;
  padding: 0;
`;
export const LanguageMenuWrapper = styled.div`
  display: none;

  ${isDesktopLayout.query} {
    display: block;
  }
`;
