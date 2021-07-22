import { css, Global } from "@emotion/react";

const styles = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-tap-highlight-color: transparent;
  }

  body {
    font-size: 16px;
    font-family: "Poppins", sans-serif;
  }

  input {
    appearance: none;
    background-color: #00000000;
    color: inherit;
    border-radius: 0;
    border: 0;
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    appearance: none;
    border: 0;
    background-color: transparent;
    font: inherit;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
`;

export const GlobalStyles = () => <Global styles={styles} />;
