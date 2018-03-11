import React from 'react'

import Card from 'Components/card'

import { IconReact, IconJs, IconWebpack, IconRails, IconDocker, IconPostGresQL, IconPython } from 'Styles/icons'

const Divider = () => <span style={{ display: 'inline-block', paddingLeft: '1em' }}> ● </span> 

const SkillSet = ({title, skills}) => {
  return (
    <div style={{ marginLeft: '5em' }}>
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
    
    { <SkillSet title="FrontEnd" skills={[<IconReact/>, <IconJs/>, <IconWebpack/>]} /> }

  </Card>
)

export default Skills
