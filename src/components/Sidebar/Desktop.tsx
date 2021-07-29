import styled from "@emotion/styled";
import { ReactNode } from "react";
import { media } from "../../hooks/media";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Desktop = styled.div`
  display: none;
  ${media.lg} {
    display: flex;
  }

  grid-area: aside;
  padding: 24px;
  height: 100%;
  flex-direction: column;
  max-width: 500px;
  border-left: 1px solid ${(p) => p.theme.colors.primary100};

  & > * + * {
    margin-top: 16px;
  }
`;
