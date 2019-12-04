import React, {useState} from "react"
import dataSkills from "../data/skills"
import Skill from "./Skill"

const Skills = () => {
  const [skills, setSkills] = useState(dataSkills);
  return (
    <div className="skills">
      <ion-icon name="color-wand" size="large"></ion-icon>
      <h2>
        <span>skills </span>
      </h2>
      <div className="bubbles">
        {skills.map( (item,index) => {
          return <Skill key={`${index}-${item.name}`} text={item.text} name={item.name}/> 
        })}
      </div>
    </div>
  )
}

export default Skills
