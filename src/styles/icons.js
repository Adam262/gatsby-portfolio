import React from 'react'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import { faCopyright } from '@fortawesome/fontawesome-free-solid'
import brands from '@fortawesome/fontawesome-free-brands'

import devicon from 'devicon';
import 'Styles/devicon/devicon.css';

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

export const IconReact = () =>  <i className="devicon-react-plain"> <span> React </span> </i>
export const IconJs = () =>  <i className="devicon-javascript-plain"> <span> Javascript (ES6) </span> </i>
export const IconWebpack = () =>  <i className="devicon-webpack-plain"> <span> Webpack </span> </i>

export const IconRails = () =>  <i className="devicon-rails-plain"> <span> Rails 4 </span> </i>
export const IconDocker = () =>  <i className="devicon-docker-plain"> <span> Docker </span> </i>
export const IconPostGresQL = () =>  <i className="devicon-postgresql-plain"> <span> PostgresQL </span> </i>
export const IconPython = () =>  <i className="devicon-python-plain"> <span> Python </span> </i>
