import React from 'react'

import { FormGroup, TextField }  from './form_fields';
import FlatButton from 'material-ui/FlatButton';

import styled from 'styled-components';
import { breakPoints, colors } from 'Styles/main';
import { isMobile } from 'Root/utils';

class ContactForm extends React.Component { 
  render() {
    return(
      <form style={{ width: '60em' }}
        action="https://formspree.io/hello@adambarcan.com"
        method="POST"
      >
        <input type="hidden" name="_next" value="/" />
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <FormGroup>
          <TextField
            fullWidth
            name="full_name"
            label="Full Name"
          />
        </FormGroup>
   
        <FormGroup> 
          <TextField
            fullWidth
            name="email"
            type="email"
            label="Email"
          />  
        </FormGroup>

        <FormGroup>
          <TextField
            multiLine
            fullWidth
            name="message"
            label="Message"
            rows={ 3 }
          />  
        </FormGroup>

        <FlatButton
          primary
          backgroundColor={ colors.darkGrey }
          hoverColor={ colors.lightGrey }
          style={{ display: "block", color: colors.white, marginTop: 10 }}
          label="Submit"
          type="submit"
        />     
      </form>
    );
  }
}

export default ContactForm
