import React from 'react'
import ExternalLink from 'Components/external_link';

import { myEmail } from '../constants.js'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"

import styled from 'styled-components';

const Contact = () => {
  return (
    <Card title="Let's talk">
      <p> Reach out to talk coding, photograpny or running or just to say hello</p>
      <p> My personal email is <ExternalLink href={`mailto:${myEmail}`}>hello@adambarcan.com</ExternalLink> </p>
      <ContactForm/>
    </Card>
  );
}

export default Contact
