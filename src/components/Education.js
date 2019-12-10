import React from "react"

import { IoMdSchool, IoMdCodeWorking } from "react-icons/io"

const experience = [
  {
    dateTime: "2018-12 --- 2019-11",
    time: "12/2018 – 11/2019",
    company: "Kindred Group s.r.o.",
    role: "frontend developer",
    position: `implementation of frontend web
  applications, HTML/CSS coding, reactive JS frameworks like React/Vue, ES6, jQuery support, errors debugging`,
  },
  {
    dateTime: "2017-08 --- 2018-09",
    time: "08/2017 – 09/2018",
    company: "OTYS Česká republika, s.r.o",
    role: "frontend developer",
    position: `HTML/CSS coding of websites and
  job portals, creating HTML templates for CMS, creating/editing
  email templates, newsletters for customers`,
  },
  {
    dateTime: "2014-03 --- 2015-10",
    time: "03/2014 – 10/2015",
    company: "Panamedical Group Corporation, Panamedical Publishing Ukraine",
    role: "content manager",
    position: `updating and managing the daily
  content of websites, information processing, selection and
  preparation of articles and news, content translation, websites
  editing (HTML), work with different CMS`,
  },
]

const Education = () => {
  //get markup for single work place
  const workPlace = experience.map(place => {
    return (
      <p key={place.time}>
        {" "}
        <time dateTime={place.dateTime}>{place.time} </time>
        --<b> {place.company}</b>
        <br />
        <span>
          position - <b>{place.role}</b> ({place.position})
        </span>
      </p>
    )
  })
  return (
    <>
      <div className="education">
        <IoMdSchool color="#38b2ac" fontSize="45px" />
        <h2>
          <span>education </span>
        </h2>
        <p>
          <time dateTime="2003-09 --- 2009-01">09/2003 – 01/2009 </time>
          -- Kyiv International University, Ukraine
        </p>
        <p>
          <b>Faculty:</b> Faculty of International Relations
        </p>
        <p>
          <b>Master degree:</b> International Information
        </p>
      </div>
      <div className="work experience">
        <IoMdCodeWorking color="#38b2ac" fontSize="45px" />
        <h2>
          <span>work experience </span>
        </h2>
        {workPlace}
      </div>
    </>
  )
}

export default Education
