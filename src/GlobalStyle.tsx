import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ink Free';
    src: url('./lib/fonts/InkFree.eot');
    src: url('./lib/fonts/InkFree.eot?#iefix') format('embedded-opentype'),
        url('./lib/fonts/InkFree.woff2') format('woff2'),
        url('./lib/fonts/InkFree.woff') format('woff'),
        url('./lib/fonts/InkFree.ttf') format('truetype'),
        url('./lib/fonts/InkFree.svg#InkFree') format('svg');
    font-weight: normal;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'NanumGothic';
    src: url('./lib/fonts/NanumGothic.eot');
    src: url('./lib/fonts/NanumGothic.eot?#iefix') format('embedded-opentype'),
        url('./lib/fonts/NanumGothic.woff2') format('woff2'),
        url('./lib/fonts/NanumGothic.woff') format('woff'),
        url('./lib/fonts/NanumGothic.ttf') format('truetype'),
        url('./lib/fonts/NanumGothic.svg#NanumGothic') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'NanumSquareRound';
    src: url('./lib/fonts/NanumSquareRoundL.eot');
    src: url('./lib/fonts/NanumSquareRoundL.eot?#iefix') format('embedded-opentype'),
        url('./lib/fonts/NanumSquareRoundL.woff2') format('woff2'),
        url('./lib/fonts/NanumSquareRoundL.woff') format('woff'),
        url('./lib/fonts/NanumSquareRoundL.ttf') format('truetype'),
        url('./lib/fonts/NanumSquareRoundL.svg#NanumSquareRoundL') format('svg');
    font-weight: 300;
    font-style: normal;
  }

  body {    
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
  }
`;
