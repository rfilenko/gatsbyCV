import React from "react"
import MdAt from 'react-ionicons/lib/MdAt'

import MdMailOpen from 'react-ionicons/lib/MdMailOpen'
import LogoSkype from 'react-ionicons/lib/LogoSkype'
import LogoTwitter from 'react-ionicons/lib/LogoTwitter'

const Contact = () => {
  return (
    <div className="contact">
        <MdAt color="#38b2ac" fontSize="45px"/>
      <h2>
        <span>contact </span>
      </h2>
      <ul>
        <li>
          <MdMailOpen color="#38b2ac" fontSize="20px"/>
           roman.filenko@gmail.com
        </li>
        <li>
          <LogoSkype color="#38b2ac" fontSize="20px"/> romafilenko
        </li>
        <li>
          <LogoTwitter color="#38b2ac" fontSize="20px"/> @r_filenko
        </li>
      </ul>
    </div>
  )
}

export default Contact
