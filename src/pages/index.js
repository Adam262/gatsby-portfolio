import React from 'react'

import { externalLinks } from '../constants.js'

import Card from 'Components/card';

import Scene from 'Components/three/scene';

const IndexPage = () => (
  <div>
    <Card title="Fullstack developer in NYC">
      <p> 
        I&#39;m a full-stack + DevOps software engineer with deep experience in Ruby on Rails, React, Kubernetes and Terraform. 

        With a strong background in automated testing, I value writing code that is well-tested, coherent, and maintainable. 

        Outside of coding, I&#39;m a lifelong competitive runner, and a photographer of sports and music events. 
       </p>
    </Card>
    <Scene/>
  </div>
);

export default IndexPage;
