import styled, { injectGlobal } from 'styled-components';
import { openSans, raleWay } from "./fonts/fonts";

export const colors = {
  black: 'black',
  white: 'white',
  darkGrey: 'hsla(0,0%,100%, .4)',
  lightGrey: 'hsla(0,0%,100%, .8)',
  turquoise: '#42D3DB'
};

export const breakPoints = {
  mobile: '320px',
  mobileLandscape: '480px',
  tablet: '768px',
  tabletLandscape: '1024px',
}

injectGlobal`
  @font-face {
    font-family: 'Raleway';
    src: local('Raleway'), url(${raleWay});

    font-family: 'Open Sans';
    src: local('Open Sans'), url(${openSans});
  }

  body {
    background: black;
    color: white;
    overflow: hidden;
  }

  canvas {
    padding: 0;
    margin: auto;
    display: block;
    width: 800px;
  }

  #container {
    font-family: 'Raleway', Arial, sans-serif;
    margin: 0 0 0 5em;
    max-width: ${breakPoints.tabletLandscape};
    margin: 0 auto;
  }

  p, span {
    color: ${colors.darkGrey};
    font-family: 'Raleway', Arial, sans-serif;
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

  h1, h2, h3 {
    font-weight: 300;
    font-family: 'Open Sans', Arial, sans-serif;
    color: ${colors.lightGrey};
  }

  h1 {
    width: 8em;
  }

  @media (max-width: ${breakPoints.tablet}) {
    #container {
      margin: 0 5%;
      overflow: hidden;
    }

    h1 {
      font-size: 18px;
    }

    h2 {
      font-size: 16px;
    }

    p, li {
      font-size: 14px;
      max-width: 25em;
    }

    canvas {
      max-height: 300px;
    }
  }
`;
