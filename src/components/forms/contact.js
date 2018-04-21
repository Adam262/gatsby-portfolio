import React from 'react'

import { FormGroup, TextField }  from './form_fields';
import FlatButton from 'material-ui/FlatButton';

import styled, { ThemeProvider } from 'styled-components';
import { breakPoints, colors } from 'Styles/main';
import { isMobile } from 'Root/utils';

class ContactForm extends React.Component { 
  render() {
    return(
      <ThemeProvider theme={colors}>
        <form style={{ width: '60em' }}
          action="https://formspree.io/hello@adambarcan.com"
          method="POST"
        >
          <input type="hidden" name="_next" value="/" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <FormGroup 
            justify={!isMobile()}>
            <TextField
              fullWidth={isMobile()}
              inline={!isMobile()}
              name="full_name"
              label="Full Name"
            />
     
            <TextField
              fullWidth={isMobile()}
              inline={!isMobile()}
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
              rows={ isMobile() ? 2 : 5}
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
