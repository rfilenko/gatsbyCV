import React from "react"
// import skills from "../data/skills"

const Skill = props => {
  return (
    <div className="bubble">
      <div className="front">
        {/* {skills.map(skill => {
          return console.log(skill.name)
        })} */}
      </div>
      <div className="back">{props.skill.text}</div>
    </div>
  )
}
export default Skill
