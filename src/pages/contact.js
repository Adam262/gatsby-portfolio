import React from 'react'
import Link from 'gatsby-link'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"

const Contact = () => {
  return (
    <Card title="Get in touch">
      <ContactForm/>
    </Card>
  );
}

export default Contact
