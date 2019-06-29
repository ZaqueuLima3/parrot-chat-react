import { createGlobalStyle } from 'styled-components';

const Base = createGlobalStyle`
  html, body {
    font-size: var(--size-base);
    font-family: 'Roboto Slab', sans-serif;
  }

  input {
    font-family: inherit;
    font-size: inherit;
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Base;
