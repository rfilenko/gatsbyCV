import React from "react"
import "../components/scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Personal from "../components/Personal"
import Contact from "../components/Contact"
import Skills from "../components/Skills"

import Education from "../components/Education"
import ProfSkills from "../components/ProfSkills"
import ContactBtn from "../components/ContactBtn"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="pattern-bg"></div>
    <div className="container">
      <aside>
        <Personal />
        <Contact />
        <Skills />
        <ContactBtn btnText="contact me" name="smile" />
      </aside>
      <main>
        <Education />
        <ProfSkills />
      </main>
    </div>
  </Layout>
)

export default IndexPage
