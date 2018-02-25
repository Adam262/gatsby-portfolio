import React from 'react'
import Link from 'gatsby-link'

import { colors } from '../../styles/main'

import styled, { ThemeProvider } from 'styled-components'
import { cloneDeep, mapValues } from 'lodash';

const borderBottom = (noDecoration, isActive, colors) => {
  if (!!noDecoration) {
    return 'inheirit';
  }

  return isActive ? `2px solid ${colors.white}` : `2px solid ${colors.lightGrey}`;
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
        work: { to: 'Work', text: 'Work', active: false },
        about: { to: 'About', text: 'About', active: false },
        contact: { to: 'Contact', text: 'Contact', active: false },
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

  render() {
    const work = this.state.links.work;
    const about = this.state.links.about;
    const contact = this.state.links.contact;

    return (
      <ThemeProvider theme={colors}>
        <Container> 
          <StyledLink 
            noDecoration 
            onClick={ () => this.onClick("home") } 
            to="/" 
            style={{ marginLeft: '5em' }}
          > 
            <h1> Adam Barcan </h1> 
          </StyledLink>
        
          <NavBar>
            <StyledLink 
              active={ work.active }
              onClick={ () => this.onClick("work") } 
              to= { work.to }
            > 
              Work 
            </StyledLink>

            <StyledLink 
              active={ about.active }
              onClick={ () => this.onClick("about") } 
              to= { about.to }
            > 
              About 
            </StyledLink>

            <StyledLink 
              active={ contact.active }
              onClick={ () => this.onClick("contact") } 
              to= { contact.to }
            > 
              Contact 
            </StyledLink>
          </NavBar>
        </Container>
      </ThemeProvider>
    );
  }
}


export default Header
