import styled from "@emotion/styled";
import { Layout } from "../Layout";
import { contentWidth } from "../Layout/utils";

export const Contact = () => (
  <Layout>
    <Root>Hi</Root>
  </Layout>
);

export const Root = styled.div`
  margin: 0 auto;
  height: 100%;
  width: ${contentWidth};
`;
