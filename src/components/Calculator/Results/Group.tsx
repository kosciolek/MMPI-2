import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { ScaleHierarchy, scaleHierarchy } from "../../../mmpi-2/scaleHierarchy";
import { useAppSelector } from "../../../redux/hooks";
import { getFinalScaleValues } from "../../../redux/mmpi/mmpi-selectors";
import { Counter } from "./Counter";

export type ScaleGroupProps = {
  groupName: keyof ScaleHierarchy;
};

export const Group = ({ groupName }: ScaleGroupProps) => {
  const results = useAppSelector(getFinalScaleValues);
  const { t } = useTranslation("groups");
  console.log(groupName);
  return (
    <Root>
      <GroupName>{t(groupName)}</GroupName>
      <Counters>
        {scaleHierarchy[groupName].map((scaleName) => {
          const scaleValue = results[scaleName];
          return <Counter key={scaleName} name={scaleName} value={scaleValue} />;
        })}
      </Counters>
    </Root>
  );
};

export const Root = styled.div`
  & + & {
    border-top: 1px solid ${(p) => p.theme.colors.primary100}50;
  }

  &:nth-of-type(even) {
    background-color: ${(p) => p.theme.colors.primary50}60;
  }
  padding: 0 0 32px 16px;
`;
export const GroupName = styled.div`
  color: ${(p) => p.theme.colors.primary600};
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 16px;
  padding: 16px 0;
`;
export const Counters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 16px;
`;
