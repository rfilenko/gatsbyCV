import React from "react"

const Skill = ({text, name}) => {
  return (
    <div className="bubble">
        <div className="front">
        <ion-icon name={name}></ion-icon>
        </div>
        <div className="back">{text}</div>
    </div>
  )
}
export default Skill
