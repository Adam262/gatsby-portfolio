import React from 'react'
import ExternalLink from 'Components/external_link';

import { myEmail } from '../constants.js'

import Card from "Components/card"
import ContactForm from "Components/forms/contact"

import styled from 'styled-components';


const About = () => (
  <div>
    <Card title="About Me">
      <p> 
        I've been a full-time software engineer at Greenhouse.io since 2014. I started on the Test Automation team, where I learned the ins and outs of 
        automated testing over a Rails app. Within a year, I earned a promotion to the Product Engineering team, where I build features and fix bugs. 
        Our app runs on Ruby on Rails and React/Webpack, with a smattering of older JS code written in jQuery, Angular and Backbone. 
        
        <br/>
        <br/>

        I also have a regular rotation as a product support engineer. About once a month, I handle tickets for customers with issues escalted by our chat support team. 

        <br/>
        <br/>

        I am a graduate of Fullstack Academy of Code, an immersive coding bootcamp based in NYC. Before my transition to programming, I earned a master's degree in international affairs and economics from Columbia University.
      </p>
    </Card> 

    <Card title="Projects">
      
    </Card> 

    <Card title="">

    </Card>
  </div>
)

export default About
