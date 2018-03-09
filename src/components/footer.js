import React from 'react'
import PropTypes from 'prop-types'

import SocialNavbar from './social_navbar';

import { colors } from 'Styles/main'
import { Copyright } from 'Styles/icons'
import styled, { ThemeProvider } from 'styled-components'

const StyledFooter = styled.div`
  width: 100%;
  position: fixed;
  bottom: 2em;
  display: flex;
`;

const CopyrightContainer = styled.div`
  width: 50%;
`;

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 35%;
  margin-right: 15%;
`;

const currentYear = () => (new Date).getFullYear();

const Footer = () => {
  return (
    <StyledFooter>  
      <CopyrightContainer> 
        <Copyright style={{ paddingRight: '1em' }}/> 
        { currentYear() } Adam Barcan
      </CopyrightContainer>
      <SocialContainer>
        <SocialNavbar/>
      </SocialContainer>
    </StyledFooter>
  );
}

export default Footer;
