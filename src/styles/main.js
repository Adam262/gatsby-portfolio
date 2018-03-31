import styled, { injectGlobal } from 'styled-components';

export const colors = {
  black: 'black',
  white: 'white',
  darkGrey: 'hsla(0,0%,100%, .4)',
  lightGrey: 'hsla(0,0%,100%, .8)',
  turquoise: '#42D3DB'
};

export const breakPoints = {
  mobile: '768px'
}

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: url('./raleway/Raleway-Regular.ttf');

    font-family: 'Open Sans';
    src: url('./open-sans/OpenSans-Regular.ttf');
  } 

  body {
    background: black;
    color: white;
    font-family: 'Raleway', Arial, sans-serif;
    margin: 0 0 0 5em;
  }

  p {
    color: ${colors.darkGrey};
    line-height: 1.4em;
    text-align: justify;
    text-justify: inter-word;
  }

  ul {
    padding-left: 0;
  }

  li {
    display: inline-block;
    list-style-type: none;
  }

  h1, h2, h3, span {
    font-weight: 300;
    font-family: 'Open Sans', Arial, sans-serif;
    color: ${colors.lightGrey};
  }

  h1 {
    max-width: 8em;
  }

  @media (max-width: ${breakPoints.mobile}) {
    h1 {
      font-size: 20px;
    }

    h2 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
      max-width: 300px;
    }
  }
`;
