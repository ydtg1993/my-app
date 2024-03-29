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
  font-weight: 300;
  overflow: hidden;
  touch-action: manipulation;
  background: #fff6e8;
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
   text-decoration: none;
   color: inherit;
}
p {
    display: block;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    height: fit-content;
}
ul {
    list-style-type: none;
}
#root{
    display: flex;
    justify-content: center;
    height: calc(100vh);
}
.scroll{
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 0;
    }
    
    &::-webkit-scrollbar-track {
        background-color: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: rgba(0, 0, 0, 0);
    }
    scrollbar-width: thin;
    scrollbar-color: transparent transparent;
    scrollbar-width: thin;
    scrollbar-color: transparent;
}
.trim_text{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
`;