import { createGlobalStyle } from 'styled-components'
import { NProgressStyled } from './nprogress'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: ${props => props.theme.colors.background2};
    color: ${props => props.theme.colors.text};
    font: 400 1.6rem Roboto, sans-serif;
  }

  ${NProgressStyled}

  @media (max-width: 768px) {
    html {
      font-size: 40%;
    }
  }
`
