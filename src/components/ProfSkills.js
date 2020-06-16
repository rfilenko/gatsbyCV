import React from "react"
import {
  IoMdDesktop,
  IoLogoSass,
  IoLogoGithub,
  IoLogoNpm,
} from "react-icons/io"

const ProfSkills = () => {
  return (
    <section className="professional skills">
      <IoMdDesktop color="#38b2ac" fontSize="45px" />
      <h2>
        <span>professional skills</span>
      </h2>
      <div className="description">
        <article className="tech">
          <h3>Programming and advanced technologies:</h3>
          <div className="prof-icons">
            <IoLogoSass color="#38b2ac" fontSize="45px" />
            <IoLogoGithub color="#38b2ac" fontSize="45px" />
            <IoLogoNpm color="#38b2ac" fontSize="45px" />
          </div>
        </article>

        <article className="skillset">
          <h3>Skillset:</h3>
          <ul>
            <li>✓ 95% team player;</li>
            <li>✓ 92% time management;</li>
            <li>✓ 83% working with others;</li>
            <li>✓ 79% working under pressure.</li>
          </ul>
        </article>

        <article className="prior-experience">
          <h3>Prior experience:</h3>
          <ul>
            <li>✓ semantic markup, accessibilty checks;</li>
            <li>✓ responsive design, media queries;</li>
            <li>
              ✓ modern css layout techniques like flexbox, css grid, css custom
              variables;
            </li>
            <li>✓ build tools like webpack/gulp;</li>
            <li>
              ✓ modern graphical tools (Sketch, Figma, Invision, Adobe XD);
            </li>
            <li>✓ cross-browser coding, testing.</li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default ProfSkills
