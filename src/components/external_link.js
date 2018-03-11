import React from 'react'

import { colors } from 'Styles/main'
import styled, { ThemeProvider } from 'styled-components'

const Link = styled.a`
  color: ${props => colors.lightGrey};
  font-family: 'Raleway', Arial, sans-serif;
  padding-left: 5px;
  padding-right: 5px;

  &:hover {
    color: ${colors.white};
  }
`;

const ExternalLink = ({href, children}) => {
  return <ThemeProvider theme={colors}>
    <Link colors={colors} href={href} target="_blank">
      {children}
    </Link>
  </ThemeProvider>
}

export default ExternalLink;
