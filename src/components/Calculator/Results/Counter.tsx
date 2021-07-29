import styled from "@emotion/styled";

export type CounterProps = {
  name: string;
  value: string;
};

export const Counter = ({ name, value }: CounterProps) => (
  <Root>
    <Name>{name}</Name>
    <Value>{value}</Value>
  </Root>
);

export const Root = styled.div`
  display: flex;
  align-items: center;
`;
export const Name = styled.div`
  color: ${(p) => p.theme.colors.primary700};
  font-size: 22px;
`;
export const Value = styled.div`
  font-size: 20px;
  color: ${(p) => p.theme.colors.primary};
  margin-left: 8px;
`;
