import styled from "@emotion/styled";
import { Button } from "../Button";
import { Link } from "../Link";

export const HomeButton = () => (
  <Link transparent to="/">
    <Button noPadding>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 476.912 476.912"
        width={36}
        height={36}
      >
        <path d="M461.776 209.408L249.568 4.52c-6.182-6.026-16.042-6.026-22.224 0L15.144 209.4a15.998 15.998 0 00-4.888 11.512c0 8.837 7.164 16 16 16h28.2v224c0 8.837 7.163 16 16 16h112c8.837 0 16-7.163 16-16v-128h80v128c0 8.837 7.163 16 16 16h112c8.837 0 16-7.163 16-16v-224h28.2c4.338 0 8.489-1.761 11.504-4.88 6.141-6.354 5.969-16.483-.384-22.624zm-39.32 11.504c-8.837 0-16 7.163-16 16v224h-112v-128c0-8.837-7.163-16-16-16h-80c-8.837 0-16 7.163-16 16v128h-112v-224c0-8.837-7.163-16-16-16h-28.2l212.2-204.88 212.28 204.88h-28.28z" />
      </Svg>
    </Button>
  </Link>
);

export const Svg = styled.svg`
  fill: #3a83e2;
  padding: 3px;
`;
