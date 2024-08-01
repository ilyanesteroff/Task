import { createGlobalStyle } from 'styled-components'

export const GlobalStyleSheet = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
  html{
    -webkit-text-size-adjust: 100%;
    position: relative;
    overflow-y: scroll;
  }
  body {
    overscroll-behavior-x: contain;
    overscroll-behavior-y: contain;
    background-color: #FAFAFA;
    font-family: 'MuseoSans';
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
    color: #384045;
    margin: 0;
  }
  a {
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  button, a, input, label, textarea {
    cursor: pointer;
  }
  button {
    border: unset;
    background-color: unset;
    display: inline-block;
    margin: 0;
    padding: 0;
    position: relative;
    text-align: center;
    text-decoration: unset;
    box-sizing: border-box;
    touch-action: manipulation;
    :disabled {
      cursor: not-allowed;
    }
  }
  svg{
    position: relative;
  }
`