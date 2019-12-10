import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { IoMdContact } from "react-icons/io"

const Personal = () => {
  const photo = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="personal">
        <div style={{ maxWidth: `110px`, margin: `0 auto 1.25rem` }}>
          <Img fluid={photo.placeholderImage.childImageSharp.fluid} />
        </div>
        <h2>
          <span>Roman </span>
          Filenko
        </h2>
        <h3>frontend developer</h3>
      </div>
      <div className="profile">
        <IoMdContact color="#38b2ac" fontSize="45px" />
        <h2>
          <span>profile </span>
        </h2>
        <p>
          Currently I'm looking for the position of frontend developer with the
          opportunity to implement the existing experience and participate in
          challeging projects. Interested in development of modern web
          applications with possibility to continually discover and implement
          trending technologies.
        </p>
      </div>
    </>
  )
}

export default Personal
