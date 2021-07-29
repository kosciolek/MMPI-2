import styled from "@emotion/styled";
import { ScaleHierarchy, scaleHierarchy } from "../../../mmpi-2/scaleHierarchy";
import { Group } from "./Group";

export const Results = () => (
  <Root>
    {Object.keys(scaleHierarchy).map((groupName) => (
      <Group key={groupName} groupName={groupName as keyof ScaleHierarchy} />
    ))}
  </Root>
);

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 48px;
`;
