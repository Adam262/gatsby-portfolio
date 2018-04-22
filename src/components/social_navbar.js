import React from 'react'
import PropTypes from 'prop-types'

import { IconLink, Icon } from 'Styles/icons'

import { externalLinks } from 'Root/constants.js'
import styled from 'styled-components'

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
