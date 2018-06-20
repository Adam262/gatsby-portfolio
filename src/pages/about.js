import React from 'react'
import ExternalLink from 'Components/external_link';
import { colors } from 'Styles/main';

import Card from "Components/card"
import { Column } from "Components/grid"
import { ColumnImage as Image } from "Components/images"

import { isMobile } from 'Root/utils';

import styled from 'styled-components';

const About = ({ data }) => {
  return (
    <div>
      <Column>
        <Card title="About Me">
          <p> 
            I've been a full-time software engineer at Greenhouse.io since 2014. I started on the Test Automation team, where I learned the ins and outs of 
            unit and integration testing over a Rails app. Within a year, I earned a promotion to the Product Engineering team, where I build features and fix bugs. 
            I mainly work in Rails and React/Webpack.
            
            <br/>
            <br/>

            I also have a regular rotation as a product support engineer. About once a month, I handle tickets for customers with issues escalated by our chat support team. 

            <br/>
            <br/>

            { 
              !isMobile() && 
              <span> 
                I am a graduate of Fullstack Academy of Code, an immersive coding bootcamp based in NYC. 
                Before my transition to programming, I earned a master's degree in international affairs and economics from Columbia University.
              </span>
            }
          </p>
        </Card> 
      </Column>
      <Column> 
        <Image title='image by ig: @sofiography' src={require('Image/fence.jpg')} />
      </Column>
    </div>
  );
}

export default About

export const query = graphql`
  query FileTreeQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
  }
`;
