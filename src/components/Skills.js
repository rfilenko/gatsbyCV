import React from "react"
import dataSkills from "../data/skills"

import { IoMdColorWand } from "react-icons/io"

const Skills = () => {
  return (
    <div className="skills">
      <IoMdColorWand color="#38b2ac" fontSize="45px" />
      <h2>
        <span>skills </span>
      </h2>
      <div className="bubbles">
        {dataSkills.map(skill => {
          return (
            <div className="bubble" key={`index-${skill.text}`}>
              <div className="front">
                <skill.type color="#fff" fontSize="45px" />
              </div>
              <div className="back">{skill.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
