import React from 'react'
import Link from './link'
import Helmet from 'react-helmet'

import { breakPoints, colors } from 'Styles/main'

import styled, { ThemeProvider } from 'styled-components'
import { cloneDeep, mapValues, findKey } from 'lodash';

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3em;

  @media (max-width: ${breakPoints.tablet}) {
    display: block;
    text-align: center;
    a {
      font-size: 14px;
      margin: 0 10% 0 0;
      display: inline-block;
    }
  }
`;

const NavBar = styled.nav`
  display: flex;
  float: right;
  justify-content: space-between;
  margin-right: 15em;
  width: 15em;

  @media (max-width: ${breakPoints.tablet}) {
    width: 100%;
    margin: 5% auto;  
  }
`;

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: {
        skills: { to: 'skills', text: 'Skills', active: false },
        about: { to: 'about', text: 'About', active: false },
        contact: { to: 'contact', text: 'Contact', active: false },
      }
    }
  }

  onClick(key) {
    const links = mapValues(
      cloneDeep(this.state.links), 
      link => Object.assign({}, link, { active: false})
    );

    if (key !== 'home') {
      links[key].active = true;
    } 

    this.setState({ links: links });
  } 

  activeTitle() {
    const links = this.state.links;
    const activeLinkKey = findKey(links, link => !!link.active);
 
    return !!activeLinkKey ? `Adam Barcan | ${links[activeLinkKey].text}` : 'Adam Barcan'
  }

  render() {
    const skills = this.state.links.skills;
    const about = this.state.links.about;
    const contact = this.state.links.contact;

    return (
      <ThemeProvider theme={colors}>
        <Container> 
          <Helmet title={ this.activeTitle() } />
          <Link 
            noDecoration 
            onClick={ () => this.onClick("home") } 
            to="/" 
          > 
            <h1> Adam Barcan </h1> 
          </Link>
        
          <NavBar>
            <Link 
              active={ skills.active }
              onClick={ () => this.onClick("skills") } 
              to= { skills.to }
            > 
              { skills.text } 
            </Link>

            <Link 
              active={ about.active }
              onClick={ () => this.onClick("about") } 
              to= { about.to }
            > 
              { about.text } 
            </Link>   

            <Link 
              active={ contact.active }
              onClick={ () => this.onClick("contact") } 
              to= { contact.to }
            > 
              { contact.text } 
            </Link>
          </NavBar>
        </Container>
      </ThemeProvider>
    );
  }
}


export default Header
