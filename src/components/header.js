import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { colors } from 'Styles/main'

import styled, { ThemeProvider } from 'styled-components'
import { cloneDeep, mapValues, findKey } from 'lodash';

const borderBottom = (noDecoration, isActive, colors) => {
  if (!!noDecoration) {
    return 'inheirit';
  }

  return isActive ? `2px solid ${colors.white}` : `2px solid ${colors.darkGrey}`;
}

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3em;
`;

const StyledLink = styled(Link)`
  color: ${props => props.theme.white};
  display: inline-block;
  font-family: 'Raleway', Arial, sans-serif;
  padding-bottom: 5px;
  text-decoration: none;
  border-bottom: ${props => borderBottom(props.noDecoration, props.active, props.theme)};
  transition-property: border-bottom;
  transition-duration: 1s;
`;

const NavBar = styled.nav`
  display: flex;
  float: right;
  justify-content: space-between;
  margin-right: 20em;
  width: 15em;
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
          <StyledLink 
            noDecoration 
            onClick={ () => this.onClick("home") } 
            to="/" 
          > 
            <h1> Adam Barcan </h1> 
          </StyledLink>
        
          <NavBar>
            <StyledLink 
              active={ skills.active }
              onClick={ () => this.onClick("skills") } 
              to= { skills.to }
            > 
              { skills.text } 
            </StyledLink>

            <StyledLink 
              active={ about.active }
              onClick={ () => this.onClick("about") } 
              to= { about.to }
            > 
              { about.text } 
            </StyledLink>   

            <StyledLink 
              active={ contact.active }
              onClick={ () => this.onClick("contact") } 
              to= { contact.to }
            > 
              { contact.text } 
            </StyledLink>
          </NavBar>
        </Container>
      </ThemeProvider>
    );
  }
}


export default Header
