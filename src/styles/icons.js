import React from 'react'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCamera from '@fortawesome/fontawesome-free-solid/faCamera'

import brands from '@fortawesome/fontawesome-free-brands'

import devicon from 'devicon';
import 'Styles/devicon/devicon.css';

import { colors, breakPoints } from 'Styles/main'
import styled, { ThemeProvider } from 'styled-components'

const IconWithHover = styled(FontAwesomeIcon)`
  padding: 0 1.5em;
  font-size: 20px;
  color: ${props => props.colors.lightGrey};

  &:hover {
    color: ${props => props.colors.white};
  }

  @media (max-width: ${breakPoints.tablet}) {
    padding: 0 0.5em;
    font-size: 18px;
  }
`;

const PlainIcon = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${props => props.colors.lightGrey};

  @media (max-width: ${breakPoints.tablet}) {
    font-size: 15px;
  }
`;

export const Icon = ({faClass}) => {
  return (
    <ThemeProvider theme={colors}>
        <PlainIcon colors={colors} icon={faClass}/>
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

export const IconReact = () =>  <i className="devicon-react-plain"> <span> React </span> </i>
export const IconJs = () =>  <i className="devicon-javascript-plain"> <span> Javascript (ES6) </span> </i>
export const IconWebpack = () =>  <i className="devicon-webpack-plain"> <span> Webpack </span> </i>

export const IconRails = () =>  <i className="devicon-rails-plain"> <span> Ruby on Rails </span> </i>
export const IconPostGresQL = () =>  <i className="devicon-postgresql-plain"> <span> PostgresQL </span> </i>
export const IconRedis = () =>  <i className="devicon-redis-plain"> <span> Redis </span> </i>
export const IconDocker = () =>  <i className="devicon-docker-plain"> <span> Docker </span> </i>
export const IconPython = () =>  <i className="devicon-python-plain"> <span> Python </span> </i>

export const IconGit = () =>  <i className="devicon-git-plain"> <span> Git </span> </i>
export const IconCamera = () => <FontAwesomeIcon icon={faCamera}/>

