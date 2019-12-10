import React from "react"

import logos from "../data/progressLogos"
import {
  IoMdDesktop,
  IoLogoSass,
  IoLogoGithub,
  IoLogoNpm,
} from "react-icons/io"

const ProgressBar = props => {
  return (
    <div className="progress-wrap">
      {logos.map(logo => {
        return (
          <div className="progress-item" key={logo.id}>
            <logo.type color="#38b2ac" />
            <progress
              max="100"
              value={logo.value}
              data-tooltip={`Knowledge level of ${logo.name} - ${logo.value}%`}
            ></progress>
          </div>
        )
      })}
    </div>
  )
}

const ProfSkills = () => {
  return (
    <div className="professional skills">
      <IoMdDesktop color="#38b2ac" fontSize="45px" />
      <h2>
        <span>professional skills </span>
      </h2>
      <div className="description">
        <div>
          Programming and advanced technologies:
          <div className="prof-icons">
            <IoLogoSass color="#38b2ac" fontSize="45px" />
            <IoLogoGithub color="#38b2ac" fontSize="45px" />
            <IoLogoNpm color="#38b2ac" fontSize="45px" />
          </div>
          <div className="prof-icons">
            <ProgressBar />
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
