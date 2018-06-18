import React from 'react'

import styled from 'styled-components';
import { breakPoints } from 'Styles/main';

export const Column = styled.div`
  width: 43%;
  margin: 0 4%;
  display: inline-block;

  &:first-of-type {
    margin-left: 0;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
    margin: 0;
  }
`;
