import React from 'react'
import PropTypes from 'prop-types'

import SocialNavbar from './social_navbar';

import { breakPoints, colors } from 'Styles/main';
import { Copyright } from 'Styles/icons';
import styled, { ThemeProvider } from 'styled-components';

const StyledFooter = styled.div`
  width: ${breakPoints.tabletLandscape};
  position: fixed;
  bottom: 2em;
  display: flex;
`;

const CopyrightContainer = styled.div`
  width: 50%;

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 35%;
  margin-right: 15%;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    margin: 0;
    width: 100%;
  }
`;

const currentYear = () => (new Date).getFullYear();

const Footer = () => {
  return (
    <StyledFooter>  
      <CopyrightContainer> 
        <div>
          <Copyright/>
          <div  style={{ display: 'inline-block', paddingLeft: '1em' }}> 
            <p style={{ margin: 0 }}> { currentYear() } Adam Barcan </p>
          </div>
        </div> 
      </CopyrightContainer>
      <SocialContainer>
        <SocialNavbar/>
      </SocialContainer>
    </StyledFooter>
  );
}

export default Footer;
