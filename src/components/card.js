import React from 'react'
import PropTypes from 'prop-types'

import styled, { ThemeProvider } from 'styled-components'
import { colors } from '../styles/main'
import { fadeInUp } from '../styles/keyframes'

const StyledDiv = styled.div`
  margin: 5em;
  max-width: 50em;
  text-align: justify;
  animation: ${fadeInUp} 1s linear;
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
