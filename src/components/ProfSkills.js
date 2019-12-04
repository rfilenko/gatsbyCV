import React from "react"

import MDDesktop from "react-ionicons/lib/MDDesktop"

const ProgressBar = ({ name, value }) => {
  return (
    <div className="progress-wrap">
      <ion-icon name={`logo-${name}`}></ion-icon>
      <progress
        max="100"
        value={value}
        data-tooltip={`Knowledge level of ${name} - ${value}%`}
      ></progress>
    </div>
  )
}

const ProfSkills = () => {
  return (
    <div className="professional skills">
      <MDDesktop color="#38b2ac" fontSize="45px" />
      <h2>
        <span>professional skills </span>
      </h2>
      <div className="description">
        <div>
          Programming and advanced technologies:
          <div className="prof-icons">
            <ion-icon name="logo-sass"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-npm"></ion-icon>
          </div>
          <div className="prof-icons">
            <ProgressBar name="html5" value={96} />
            <ProgressBar name="css3" value={93} />
            <ProgressBar name="javascript" value={72} />
          </div>
        </div>
        <div>Work with:</div>
        <ul>
          <li>✓ build tools like webpack/gulp;</li>
          <li>
            ✓ experience with graphical tools (Sketch, Invision, Adobe XD);
          </li>
          <li>
            ✓ responsive design (fluid, media queries), cross-browser coding;
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProfSkills
