import React from 'react'
import PropTypes from 'prop-types';

import _TextField from 'material-ui/TextField';

import styled from 'styled-components';
import { colors } from 'Styles/main';

const Container = styled.div`
  padding-right: 30px;
`;

const styleProps = {
  inputStyle: { color: colors.white, cursor: 'pointer' },
  textareaStyle: { color: colors.white },
  floatingLabelStyle: { color: colors.darkGrey },
  floatingLabelFocusStyle: { color: colors.white },
  underlineStyle: { borderBottom: `2px solid ${colors.darkGrey}` },
  underlineFocusStyle: { borderBottom: `2px solid ${colors.white}` },
};

export const TextField = ({name, label, ...rest}) => {
  return(
    <Container>
      <_TextField
        name={name}
        hintText={label}
        floatingLabelText={label}
        { ...rest }
        { ...styleProps }
      />      
    </Container>
  );
}

TextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  inline: PropTypes.bool,
}

export const FormGroup = styled.div`
  width: 30em;
`;
