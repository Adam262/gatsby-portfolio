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
    { <SkillSet title="Rails Ecosystem" skills={[<IconRails/>, <IconPostGresQL/>, <IconRedis/>, <span> Sidekiq </span>, <span> Rspec </span>]} /> }
    { <SkillSet title="CI / CD" skills={[<IconDocker/>, <span> Jenkins </span>, <span> Solano </span>]} /> }
    { <SkillSet title="Additional" skills={[<IconGit/>, <span> Code Review </span>, <span> QA </span>, <span> Agile / Kanban </span>, <span> Jira </span>]} /> }

  </Card>
)

export default Skills
