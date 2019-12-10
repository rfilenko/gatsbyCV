import React from "react"

import {
  IoMdAt,
  IoMdMailOpen,
  IoLogoSkype,
  IoLogoTwitter,
} from "react-icons/io"

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
        <li>
          <IoLogoTwitter color="#38b2ac" fontSize="20px" /> @r_filenko
        </li>
      </ul>
    </div>
  )
}

export default Contact
