import React from 'react'
import PropTypes from 'prop-types';

import _Link from 'gatsby-link'

import { colors } from 'Styles/main'

import styled from 'styled-components'

const borderBottom = (noDecoration, isActive) => {
  if (!!noDecoration) {
    return 'inheirit';
  }

  return isActive ? `2px solid ${colors.white}` : `2px solid ${colors.darkGrey}`;
}

const Link = styled(_Link)`
  color: ${colors.white};
  display: inline-block;
  font-family: 'Raleway', Arial, sans-serif;
  padding-bottom: 5px;
  text-decoration: none;
  border-bottom: ${props => borderBottom(props.noDecoration, props.active)};
  transition-property: border-bottom;
  transition-duration: 1s;

  &:hover {
    border-bottom: ${props => props.noDecoration ? 'none' : '2px solid ' + colors.white};
  }
`;

Link.propTypes = {
  noDecoration: PropTypes.bool,
  active: PropTypes.bool,
}

export default Link;
