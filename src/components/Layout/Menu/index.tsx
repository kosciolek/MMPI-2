import styled from "@emotion/styled";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../Button";
import { Link } from "../../Link";
import { LayoutSlot } from "../Grid";
import { ReactComponent as GithubSvg } from "./github.svg";
import { LanguageMenu } from "./LanguageMenu";
import { MobileIcon } from "./MobileIcon";

export const Menu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <LayoutSlot slot="navbarCenter">
        <Flex2>
          {/* <MobileIcon
            open={mobileOpen}
            onChange={(newState) => setMobileOpen(newState)}
          /> */}
          <LanguageMenu />
          <Link transparent to="/contact">
            <Contact>{t("contact")}</Contact>
          </Link>
        </Flex2>
      </LayoutSlot>
      <LayoutSlot slot="navbarRight">
        <Flex>
          <Link transparent to="//github.com/kosciolek/MMIP-2" target="_blank">
            <GithubButton>
              <StyledGithubSvg />
            </GithubButton>
          </Link>
        </Flex>
      </LayoutSlot>
    </>
  );
};

export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  height: 100%;
`;
export const Flex2 = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 24px;
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
