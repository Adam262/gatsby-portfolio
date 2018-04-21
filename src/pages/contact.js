import React from 'react'

import { myEmail } from '../constants.js'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"

import styled from 'styled-components';
import { breakPoints } from 'Styles/main';

import { isMobile } from 'Root/utils';

const StyledCard = styled(Card)`
  display: inline-block;
  width: 50%;

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
  }
`;

const Contact = () => {
  return (
    <div>
      <StyledCard title="Let's talk">
        { !isMobile() && <p> Reach out to talk coding, photography or running or just to say hello</p> }
        <ContactForm/>
      </StyledCard>
    </div>
  );
}

export default Contact
