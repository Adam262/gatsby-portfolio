import React from 'react'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faCopyright } from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

import { colors } from 'Styles/main'
import styled, { ThemeProvider } from 'styled-components'

const IconWithHover = styled(FontAwesomeIcon)`
  padding: 0 2em;
  font-size: 1.3em;
  color: ${props => props.colors.lightGrey};

  &:hover {
    color: ${props => props.colors.white};
  }
`;

const PlainIcon = styled(FontAwesomeIcon)`
  font-size: 1.3em;
  color: ${props => props.colors.lightGrey};
`;

const Icon = ({component, style}) => {
  return (
    <ThemeProvider theme={colors}>
      <div style={ Object.assign({}, style, { display: 'inline-block' }) }>
        <PlainIcon colors={colors} icon={component}/>
      </div>
    </ThemeProvider>
  );
}

export const IconLink = ({href, faClass}) => {
  return (
    <ThemeProvider theme={colors}>
      <a href={href} target="_blank"> 
        <IconWithHover colors={colors} icon={["fab", faClass]}/>
      </a>
    </ThemeProvider>
  );
}

export const Copyright = ({style}) => <Icon style={style} component={faCopyright}/>;
