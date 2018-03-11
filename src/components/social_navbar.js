import React from 'react'
import PropTypes from 'prop-types'

import { IconLink } from 'Styles/icons'

import { colors } from 'Styles/main'
import { externalLinks } from '../constants.js'
import styled, { ThemeProvider } from 'styled-components'

const SocialNavbar = () => {
  return (
    <div>
      <IconLink href={externalLinks.github} faClass="github"/>
      <IconLink href={externalLinks.linkedin} faClass="linkedin"/>
      <IconLink href={externalLinks.instagram} faClass="instagram"/>
      <IconLink href={externalLinks.medium} faClass="medium"/>
    </div>
  );
}

export default SocialNavbar;
