import React from 'react'
import PropTypes from 'prop-types';

import _TextField from 'material-ui/TextField';

import styled, { ThemeProvider } from 'styled-components';
import { colors } from 'Styles/main';

const Container = styled.div`
  display: ${props => !!props.inline ? "inline-block" : "block" };
  padding-right: 30px;
`;

const styleProps = {
  inputStyle: { color: colors.white },
  textareaStyle: { color: colors.white },
  floatingLabelStyle: { color: colors.darkGrey },
  floatingLabelFocusStyle: { color: colors.white },
  underlineStyle: { borderBottom: `2px solid ${colors.darkGrey}` },
  underlineFocusStyle: { borderBottom: `2px solid ${colors.white}` },
};

export const TextField = ({name, label, inline, ...rest}) => {
  return(
    <ThemeProvider theme={colors}>
      <Container inline={inline}>
        <_TextField
          name={name}
          hintText={label}
          floatingLabelText={label}
          { ...rest }
          { ...styleProps }
        />      
      </Container>
    </ThemeProvider>
  );
}

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  inline: PropTypes.bool,
}

export const FormGroup = styled.div`
  display: ${props => !!props.justify ? "flex" : "block"};
  justify-content: space-between;
  width: 40em;
`;
