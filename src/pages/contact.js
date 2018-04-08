import React from 'react'
import ExternalLink from 'Components/external_link';

import { myEmail } from '../constants.js'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"

import styled from 'styled-components';
import { breakPoints } from 'Styles/main';

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
        <p> Reach out to talk coding, photography or running or just to say hello</p>
        <p> My personal email is <ExternalLink href={`mailto:${myEmail}`}>hello@adambarcan.com</ExternalLink> </p>
        <ContactForm/>
      </StyledCard>
    </div>
  );
}

export default Contact
