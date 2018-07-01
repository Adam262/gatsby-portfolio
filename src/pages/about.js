import React from 'react'
import ExternalLink from 'Components/external_link';
import { colors } from 'Styles/main';

import Card from "Components/card"
import { Column } from "Components/grid"
import { ColumnImage as Image } from "Components/images"

import fenceImage from 'Image/fence.jpg';

import { isMobile } from 'Root/utils';

import styled from 'styled-components';


const About = ({ data }) => {
  return (
    <div>
      <Column>
        <Card title="About me">
          <p> 
            I've been a software engineer at <ExternalLink noUnderline href="https://www.greenhouse.io">Greenhouse</ExternalLink> since 2014. I started on our test automation team, where I learned the ins and outs of 
            unit and integration testing over a Rails app. Within a year, I earned a promotion to the product engineering team, where I build full-stack features and fix bugs. 
            I mainly work in Rails, Postgres and React/Webpack.
          </p>
            
          <p>
            I also have a monthly rotation as a product support engineer, where I handle tickets for customers with issues escalated by our chat support team. 
          </p>

          { 
            !isMobile() && 
            <p> 
              I am a graduate of Fullstack Academy of Code, an immersive coding bootcamp based in NYC. 
              Before my transition to programming, I earned a master's degree in international affairs and economics from Columbia University.
            </p>
            }
        </Card> 
      </Column>
      <Column> 
        <Image title='image by ig: @sofiography' src={fenceImage} />
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
