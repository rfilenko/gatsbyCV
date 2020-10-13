import React from "react"
import { IoMdDesktop } from "react-icons/io"
import IconPrimary from "./IconPrimary"

const iconsArr = [
  "IoLogoHtml5",
  "IoLogoCss3",
  "IoLogoSass",
  "IoLogoJavascript",
  "IoLogoNpm",
  "IoLogoGithub",
]
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
          <ul className="prof-icons">
            {iconsArr.map((i, idx) => {
              return (
                <li key={idx}>
                  <IconPrimary variant={i} fs="25px" />
                </li>
              )
            })}
          </ul>
        </article>

        {/* <article className="skillset">
          <h3>Skillset:</h3>
          <ul>
            <li>✓ team player;</li>
            <li>✓ time management;</li>
            <li>✓ cooperation with others;</li>
            <li>✓ work under pressure.</li>
          </ul>
        </article> */}

        <article className="prior-experience">
          <h3>Prior experience:</h3>
          <ul>
            <li>✓ semantic markup, accessibilty checks;</li>
            <li>✓ responsive design, media queries;</li>
            <li>
              ✓ modern css layout techniques like Flexbox, CSS Grid, CSS custom
              variables;
            </li>
            <li>✓ build tools like webpack, gulp, parcel;</li>
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
