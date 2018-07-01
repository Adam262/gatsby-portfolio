import React from 'react'

import styled from 'styled-components';
import { breakPoints } from 'Styles/main';

import { fadeInUp, fadeInOpacity } from 'Styles/keyframes';

export const ColumnImage = styled.img`
  opacity: 0.25;
  height: 24em;
  width: 16em;
  animation: ${fadeInUp} 1.0s linear;

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }

  &:hover {
    opacity: 0.75;
    transition: opacity 1.0s ease-out;
  }
`;
