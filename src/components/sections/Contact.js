import React from "react"

import {
  IoMdAt,
  IoMdMailOpen,
  IoLogoSkype,
  IoLogoTwitter,
  IoLogoGithub,
} from "react-icons/io"
import { MdDeveloperMode } from "react-icons/md"

const Contact = () => {
  return (
    <div className="contact">
      <IoMdAt color="#38b2ac" fontSize="45px" />
      <h2>
        <span>contact </span>
      </h2>
      <ul>
        <li>
          <IoMdMailOpen color="#38b2ac" fontSize="20px" />
          roman.filenko@gmail.com
        </li>
        <li>
          <IoLogoSkype color="#38b2ac" fontSize="20px" /> romafilenko
        </li>
        {/* <li>
          <IoLogoTwitter color="#38b2ac" fontSize="20px" /> @r_filenko
        </li> */}
        <li>
          <a
            className="contact-link"
            href="https://github.com/rfilenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub color="#38b2ac" fontSize="20px" />
            github
          </a>
        </li>
        <li>
          <a
            className="contact-link"
            href="https://www.frontendmentor.io/profile/rfilenko"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdDeveloperMode color="#38b2ac" fontSize="20px" />
            frontendmentor
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact
