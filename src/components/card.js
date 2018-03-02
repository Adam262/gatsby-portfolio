import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider } from 'styled-components'
import { colors } from 'Styles/main'
import { fadeInUp } from 'Styles/keyframes'

const StyledDiv = styled.div`
  margin: 5em;
  max-width: 50em;
  text-align: justify;
  animation: ${fadeInUp} 1.0s linear;
`;

const Card = ({title, children}) => { 
  return (
    <ThemeProvider theme={colors}> 
      <StyledDiv>
        <h2> {title} </h2>
        { children }
      </StyledDiv>
    </ThemeProvider>
  )
}

export default Card
