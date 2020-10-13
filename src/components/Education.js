import React from "react"
import { IoMdSchool, IoMdCodeWorking } from "react-icons/io"
import experience from "../data/experience"

const Education = () => {
  //get markup for a single work place
  const workPlace = experience.map(place => {
    return (
      <div key={place.time}>
        {" "}
        <time dateTime={place.dateTime}>{place.time} </time>
        --<b> {place.company}</b>
        <br />
        <details>
          <summary>
            <div>
              position - <b> {place.role},</b>
              {!!place.technologies && (
                <span> tech - ({place.technologies})</span>
              )}
            </div>
          </summary>
          ({place.position})
        </details>
      </div>
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
