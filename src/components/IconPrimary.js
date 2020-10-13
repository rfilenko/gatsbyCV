import React from "react"
import {
  IoLogoSass,
  IoLogoGithub,
  IoLogoNpm,
  IoLogoJavascript,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoChrome,
} from "react-icons/io"

const IconPrimary = ({ variant, clr = "#38b2ac", fs = "45px" }) => {
  switch (variant) {
    case "IoLogoHtml5":
      return <IoLogoHtml5 color={clr} fontSize={fs} />
    case "IoLogoCss3":
      return <IoLogoCss3 color={clr} fontSize={fs} />
    case "IoLogoSass":
      return <IoLogoSass color={clr} fontSize={fs} />
    case "IoLogoGithub":
      return <IoLogoGithub color={clr} fontSize={fs} />
    case "IoLogoNpm":
      return <IoLogoNpm color={clr} fontSize={fs} />
    case "IoLogoJavascript":
      return <IoLogoJavascript color={clr} fontSize={fs} />

    default:
      return <IoLogoChrome color="#38b2ac" fontSize="45px" />
  }
}

export default IconPrimary
