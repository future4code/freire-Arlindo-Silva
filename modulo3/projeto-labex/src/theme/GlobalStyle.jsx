import { createGlobalStyle } from "styled-components";
import background from '../constants/background.jpg'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    min-height: 100vh;
    background-image: url(${background}) ;
    background-size: cover;
  }
`
export default GlobalStyle;