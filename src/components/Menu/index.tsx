import styled from "@emotion/styled";
import { ContactLink } from "../../ContactLink";
import { Button } from "../Button";
import { Grid } from "../Grid";
import { Link } from "../Link";
import { contentWidth, isDesktopLayout } from "../Layout/utils";
import { ReactComponent as GithubSvg } from "./github.svg";
import { HomeButton } from "./HomeButton";
import { LanguageMenu } from "./LanguageMenu";
import { MobileIcon } from "./MobileIcon";

export const Menu = () => (
  <Root>
    <Grid container area="main">
      {/* todo */}
      <Grid item xs={12} lg={9}>
        <Left>
          <MobileIcon />
          <HomeButton />
          <LanguageMenuWrapper>
            <LanguageMenu />
          </LanguageMenuWrapper>
        </Left>
      </Grid>
      <Grid item lg={3} xs={0}>
        <Right>
          <Link to="//github.com/kosciolek/MMIP-2" target="_blank">
            <GithubButton>
              <StyledGithubSvg />
            </GithubButton>
          </Link>
          <ContactLink />
        </Right>
      </Grid>
    </Grid>
  </Root>
);

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

  & > * + * {
    margin-left: 16px;
  }
`;
export const GithubButton = styled(Button)`
  padding: 0;
`;
export const StyledGithubSvg = styled(GithubSvg)`
  fill: ${(p) => p.theme.colors.primary};
`;
export const LanguageMenuWrapper = styled.div`
  display: none;

  ${isDesktopLayout.query} {
    display: block;
  }
`;
