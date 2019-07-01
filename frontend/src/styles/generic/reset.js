import { createGlobalStyle } from 'styled-components';

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
  }

  ul, ol {
    list-style: none;
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Reset;
