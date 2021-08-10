import styled from "@emotion/styled";
import { Trans, useTranslation } from "react-i18next";
import { questionCount } from "../../../../mmpi-2/utils";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { uiSlice } from "../../../../redux/ui";
import { getFirstAnswer, getLastAnswer } from "../../../../redux/ui/selectors";
import { Button } from "../../../Button";
import { Txt } from "../../../Txt";
import { ReactComponent as ArrowSvg } from "./pagination-arrow.svg";
import { Wheel } from "./Wheel";

export const Pagination = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const first = useAppSelector(getFirstAnswer);
  const last = useAppSelector(getLastAnswer);

  const onPrevClick = () => dispatch(uiSlice.actions.prevPage());
  const onNextClick = () => dispatch(uiSlice.actions.nextPage());
  return (
    <Root>
      <Button noPadding onClick={onPrevClick}>
        <ArrowSvg />
      </Button>
      <Text>
        <Trans t={t}>
          <Current color="primary">
            {{ first: first + 1 }} - {{ last: last + 1 }}
          </Current>{" "}
          out of <Txt color="primary">{{ questionCount }}</Txt>
        </Trans>
      </Text>
      <Button noPadding onClick={onNextClick}>
        <RightArrow />
      </Button>
      <Wheel />
    </Root>
  );
};

export const Root = styled.div`
  display: flex;
  align-items: center;
  user-select: none;
  & > * + * {
    margin-left: 12px;
  }
`;
export const RightArrow = styled(ArrowSvg)`
  transform: rotateZ(180deg);
`;
export const Text = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => p.theme.colors.neutral700};
  text-align: center;
`;
export const Current = styled(Txt)`
  display: inline-block;
  text-align: center;
  white-space: pre;
`;
