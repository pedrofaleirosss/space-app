import { createGlobalStyle } from "styled-components";

import GandhiSansRegular from "./fontes/GandhiSans-Regular.otf";
import GandhiSansBold from "./fontes/GandhiSans-Bold.otf";

const EstilosGlobais = createGlobalStyle`
  @font-face {
    font-family: 'GandhiSansRegular';
    src: local('Gandhi Sans Regular'), local('GandhiSansRegular'), url(${GandhiSansRegular});
  }
  @font-face {
    font-family: 'GandhiSansBold';
    src: local('Gandhi Sans Bold'), local('GandhiSansBold'), url(${GandhiSansBold});
  }
  html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: GandhiSansRegular;
  }
  body {
    margin: 0;
    min-height: 100vh;
  }
  main {
    display: block;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  ol, ul {
	  list-style: none;
  }
  a {
    text-decoration: none;
  }
`;

export default EstilosGlobais;
