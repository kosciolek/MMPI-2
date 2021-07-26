import styled from "@emotion/styled";

export const OuterGrid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template: "space-left main sidebar space-right" 80px / 1fr 1000px minmax(200px, 350px) 1fr;
`;
