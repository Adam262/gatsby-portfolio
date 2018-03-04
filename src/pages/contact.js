import React from 'react'
import Link from 'gatsby-link'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"

import styled from 'styled-components';

const StyledCard = styled(Card)`
  margin: 0 auto;
`;

const Contact = () => {
  return (
    <StyledCard title="Get in touch">
      <ContactForm/>
    </StyledCard>
  );
}

export default Contact
