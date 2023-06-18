import {createGlobalStyle} from 'styled-components';
import LangFont from "./resource/font/langqing.otf";
import MyFont from "./resource/font/heiguiti.otf";

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #faefde;
  font-weight: 300;
  overflow: hidden;
  touch-action: manipulation;
  @font-face {
     font-family: 'LangFont';
     src: url('${LangFont}');
  }
  @font-face {
     font-family: 'MyFont';
     src: url('${MyFont}');
  }
}
a {
  -webkit-tap-highlight-color: transparent;
}
p{
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    height: fit-content;
}
`;