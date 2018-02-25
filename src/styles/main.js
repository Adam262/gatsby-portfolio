import styled, { injectGlobal } from 'styled-components';

injectGlobal`
  @font-face {
    font-family: 'Raleway, Arial, sans-serif';
    src: url('./raleway/Raleway-Regular.ttf');

    font-family: 'Open Sans, Verdana, sans-serif';
    src: url('./open-sans/OpenSans-Regular.ttf');
  } 

  body {
    background: black;
    color: white;
    font-family: 'Open Sans', Helvetica, sans-serif;
    padding: '0px 1.0875rem 1.45rem',
    paddingTop: 0,
    margin: 0 auto;
    maxWidth: 960px;
  }

  h1 {
    max-width: 8em;
  }
`;

export const colors = {
  black: 'black',
  white: 'white',
  lightGrey: 'hsla(0,0%,100%,.2)',
}
