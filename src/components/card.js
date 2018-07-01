import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'
import { fadeInUpWithOpacity } from 'Styles/keyframes'

const StyledDiv = styled.div`
  max-width: 50em;
  text-align: justify;
  animation: ${fadeInUpWithOpacity} 1.0s linear;
`;

const Card = ({title, className, children}) => { 
  return (
    <StyledDiv className={className}>
      <h2> {title} </h2>
      { children }
    </StyledDiv>
  )
}

Card.defultProps = {
  className: ''
};

export default Card
