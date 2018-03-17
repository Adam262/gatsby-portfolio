import React from 'react'

import { FormGroup, TextField }  from './form_fields';
import FlatButton from 'material-ui/FlatButton';

import styled, { ThemeProvider } from 'styled-components'
import { colors } from 'Styles/main'

class ContactForm extends React.Component { 
  render() {
    return(
      <ThemeProvider theme={colors}>
        <form style={{ width: '60em' }}
          action="https://formspree.io/hello@adambarcan.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="/contact" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <FormGroup justify>
            <TextField
              inline
              name="full_name"
              label="Full Name"
            />
     
            <TextField
              inline
              name="email"
              type="email"
              label="Email"
            />  
          </FormGroup>

          <FormGroup>
            <TextField
              textarea
              multiLine
              fullWidth
              name="message"
              label="Message"
              rows={5}
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
      </ThemeProvider>
    );
  }
}

export default ContactForm
