import React from 'react'

import { myEmail } from '../constants.js'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"

import styled from 'styled-components';
import { breakPoints } from 'Styles/main';

import { isMobile } from 'Root/utils';
import { fadeInUp } from 'Styles/keyframes';

const Column = styled.div`
  width: 43%;
  margin: 0 4%;
  display: inline-block;

  &:first-of-type {
    margin-left: 0;
  }

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
    margin: 0;
  }
`;

const Image = styled.img`
  opacity: 0.25;
  height: 24em;
  width: 16em;
  animation: ${fadeInUp} 1.0s linear;

  @media (max-width: ${breakPoints.tablet}) {
    display: none;
  }
`;

const Contact = () => {
  return (
    <div>
      <Column>
        <Card title="Let's talk">
          <p> Hit me up about coding, photography or running, or say hi </p>
          <ContactForm/>
        </Card>
      </Column>
      <Column>
        <Image src={require('Img/hat.jpg')} />
      </Column>
    </div>
  );
}

export default Contact
