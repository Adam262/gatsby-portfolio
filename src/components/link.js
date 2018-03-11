import React from 'react'
import PropTypes from 'prop-types';

import _Link from 'gatsby-link'

import { colors } from 'Styles/main'

import styled, { ThemeProvider } from 'styled-components'

const borderBottom = (noDecoration, isActive, colors) => {
  if (!!noDecoration) {
    return 'inheirit';
  }

  return isActive ? `2px solid ${colors.white}` : `2px solid ${colors.darkGrey}`;
}

const LinkWithTheme = ({...props}) => {
  return <ThemeProvider theme={colors}>
    <_Link {...props}/>
  </ThemeProvider>
}

const Link = styled(LinkWithTheme)`
  color: ${props => props.theme.white};
  display: inline-block;
  font-family: 'Raleway', Arial, sans-serif;
  padding-bottom: 5px;
  text-decoration: none;
  border-bottom: ${props => borderBottom(props.noDecoration, props.active, props.theme)};
  transition-property: border-bottom;
  transition-duration: 1s;

  &:hover {
    border-bottom: ${props => props.noDecoration ? 'none' : '2px solid ' + props.theme.white};
  }
`;

Link.propTypes = {
  noDecoration: PropTypes.bool,
}

export default Link;
