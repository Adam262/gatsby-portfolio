import React from 'react'

import Card from 'Components/card'

import { 
  IconReact,
  IconJs,
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
    margin-top: 2em;
  }
`;

const Divider = () => <span style={{ display: 'inline-block', paddingLeft: '1em', paddingRight: '1em' }}> ● </span> 

const SkillSet = ({title, skills}) => {
  return (
    <Container>
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
    </Container>
  );
}

const Skills = () => (
    <Card title="Skills">
    
    { <SkillSet title="JS Ecosystem" skills={[<IconJs/>, <IconReact/>, <span> Redux </span>, <span> Styled Components </span>]} /> }
    { <SkillSet title="Rails Ecosystem" skills={[<IconRails/>, <IconPostGresQL/>, <span> GraphQL </span>, <IconRedis/>, <span> Sidekiq </span>]} /> }
    { !isMobile() && <SkillSet title="CI / CD" skills={[<IconDocker/>, <span> Jenkins </span>, <span> Solano </span>]} /> }
    { !isMobile() && <SkillSet title="Additional" skills={[<IconGit/>, <span> Code Review </span>, <span> Automated Testing </span>, <span> Agile / Kanban </span>]} /> }

  </Card>
)

export default Skills
