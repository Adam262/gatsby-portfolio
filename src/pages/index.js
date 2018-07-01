import React from 'react'

import { externalLinks } from '../constants.js'

import Card from 'Components/card';

import Scene from 'Components/three/scene';

const IndexPage = () => (
  <div>
    <Card title="Fullstack developer in NYC">
      <p> 
        I'm a full-stack software engineer who mainly works in Ruby on Rails, Postgres and React. 

        With a strong background in automated testing, I value writing code that is well-tested, coherent, and maintainable. 

        Outside of coding, I'm a lifelong competitive runner, and a photographer of sports and music events. 
       </p>
    </Card>
    <Scene/>
  </div>
);

export default IndexPage;
