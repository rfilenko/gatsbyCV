import React from "react"
import { IoMdAt } from "react-icons/io"

const ContactBtn = ({ btnText, name }) => {
  return (
    <a href="mailto:roman.filenko@gmail.com" className="contact-btn">
      {btnText}
      <IoMdAt
        name={name}
        fontSize="20px"
        color="white"
        style={{ marginTop: ".15rem" }}
      />
    </a>
  )
}

export default ContactBtn
