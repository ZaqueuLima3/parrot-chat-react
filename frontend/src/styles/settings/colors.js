import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
    --color-negative-light: rgba(0, 0, 0, 0.15);
    --color-base: #3A4042;
    --color-white: #FFFFFF;
    --color-light: #F2F2F2;
    --color-primary: #2F6073;
    --color-secondary: #7297A6;
    --color-dark: #022340;
    --color-darker: #011526;
  }
`;

export default Colors;
