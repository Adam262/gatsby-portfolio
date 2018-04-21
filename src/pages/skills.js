import React from 'react'

import Card from 'Components/card'

import { 
  IconReact,
  IconJs,
  IconWebpack,
  IconRails,
  IconDocker,
  IconPostGresQL,
  IconRedis,
  IconPython,
  IconGit 
} from 'Styles/icons'

import styled from 'styled-components';

import { isMobile } from 'Root/utils';

import { breakPoints } from 'Styles/main';

const Container = styled.div`
  margin-top: 3em;

  @media (max-width: ${breakPoints.tablet}) {
    margin-top: 1em;
  }
`;

const Divider = () => <span style={{ display: 'inline-block', paddingLeft: '1em', paddingRight: '1em' }}> ● </span> 

const SkillSet = ({title, skills}) => {
  return (
    <div style={{ marginTop: '3em' }}>
      <h3> { title } </h3>
      <ul> 
        { 
          skills.map((skill, idx) => {
            return (
              <li 
                key={idx}
              > 
                { skill } { idx === skills.length - 1 ? null : <Divider/> } 
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

const Skills = () => (
    <Card title="Skills">
    
    { <SkillSet title="JS Ecosystem" skills={[<IconReact/>, <IconJs/>, <IconWebpack/>, <span> Styled Components </span>]} /> }
    { <SkillSet title="Rails Ecosystem" skills={[<IconRails/>, <IconPostGresQL/>, <IconRedis/>, <span> GraphQL API backend </span>, <span> Sidekiq </span>, <span> Rspec </span>]} /> }
    { !isMobile() && <SkillSet title="CI / CD" skills={[<IconDocker/>, <span> Jenkins </span>, <span> Solano </span>]} /> }
    { !isMobile() && <SkillSet title="Additional" skills={[<IconGit/>, <span> Code Review </span>, <span> QA </span>, <span> Agile / Kanban </span>, <span> Jira </span>]} /> }

  </Card>
)

export default Skills
