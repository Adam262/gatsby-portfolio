import React from 'react'

import { myEmail } from '../constants.js'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"
import { Column } from "Components/grid"
import { ColumnImage as Image } from "Components/images"
import hatImage from 'Image/hat.jpg';

import styled from 'styled-components';

import { isMobile } from 'Root/utils';

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
        <Image title='image by ig: @sofiography' src={hatImage} />
      </Column>
    </div>
  );
}

export default Contact
