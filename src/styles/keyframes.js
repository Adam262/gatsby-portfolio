import styled, { keyframes } from "styled-components";

export const fadeInUpWithOpacity = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0,100px,0)
  }

  to {
    opacity: 1;
    transform: none
  }
`;

export const fadeInUp = keyframes`
  from {
    transform: translate3d(0,100px,0)
  }

  to {
    transform: none
  }
`;

export const fadeInOpacity = keyframes`
  from {
    opacity: 0.25;
  }

  to {
    opacity: 0.75;
  }
`;


