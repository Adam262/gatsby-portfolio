import React from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from 'Components/header'
import Footer from 'Components/footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Adam Barcan" />
    <Header />

    <MuiThemeProvider>
      <div>
        {children()}
      </div>
    </MuiThemeProvider>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
