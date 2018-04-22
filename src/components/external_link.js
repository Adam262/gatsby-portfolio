import React from 'react'

import { colors } from 'Styles/main'
import styled from 'styled-components'

const Link = styled.a`
  color: ${colors.lightGrey};
  font-family: 'Raleway', Arial, sans-serif;
  padding-left: 5px;
  padding-right: 5px;
  text-decoration: ${props => props.noUnderline ? 'none' : 'inheirit' };

  &:hover {
    color: ${colors.white};
  }
`;

const ExternalLink = ({noUnderline, href, children}) => {
  return (
    <Link noUnderline={noUnderline} href={href} target="_blank">
      {children}
    </Link>
  );
}

export default ExternalLink;
