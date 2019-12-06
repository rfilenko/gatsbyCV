import React from "react"
import MdAt from "react-ionicons/lib/MdAt"

const ContactBtn = ({ btnText, name }) => {
  return (
    <a href="mailto:roman.filenko@gmail.com" className="contact-btn">
      {btnText}
      <MdAt
        name={name}
        fontSize="20px"
        color="white"
        style={{ marginTop: ".15rem" }}
      />
    </a>
  )
}

export default ContactBtn
