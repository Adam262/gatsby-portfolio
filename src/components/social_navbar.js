import React from 'react'
import PropTypes from 'prop-types'

import { IconLink } from 'Styles/icons'

import { colors } from 'Styles/main'
import { socialLinks } from '../constants.js'
import styled, { ThemeProvider } from 'styled-components'

const SocialNavbar = () => {
  return (
    <div>
      <IconLink href={socialLinks.github} faClass="github"/>
      <IconLink href={socialLinks.linkedin} faClass="linkedin"/>
      <IconLink href={socialLinks.instagram} faClass="instagram"/>
      <IconLink href={socialLinks.medium} faClass="medium"/>
    </div>
  );
}

export default SocialNavbar;
