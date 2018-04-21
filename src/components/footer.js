import React from 'react'
import PropTypes from 'prop-types'

import SocialNavbar from './social_navbar';

import { breakPoints, colors } from 'Styles/main';
import styled, { ThemeProvider } from 'styled-components';

const StyledFooter = styled.div`
  width: ${breakPoints.tabletLandscape};
  position: fixed;
  bottom: 2em;
  display: flex;

  @media (max-width: ${breakPoints.tabletLandscape}) {
    display: block;
  }
`;

const CopyrightContainer = styled.div`
  width: 100%;

  @media (max-width: ${breakPoints.tabletLandscape}) {
    margin: 2% auto 0;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 40%;
  margin-right: 10%;

  @media (max-width: ${breakPoints.tabletLandscape}) {
    display: block;
    margin: 2% auto;
    width: 100%;
  }
`;

const currentYear = () => (new Date).getFullYear();

const Footer = () => {
  return (
    <StyledFooter>  
      <CopyrightContainer> 
        <div>
          <span style={{ color: colors.darkGrey }}> &copy; </span>
          <div style={{ display: 'inline-block', paddingLeft: 5 }}> 
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
