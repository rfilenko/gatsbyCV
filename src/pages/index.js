import React from "react"
import "../components/scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
//sections
import Personal from "../components/sections/Personal"
import Contact from "../components/sections/Contact"
import Skills from "../components/sections/Skills"
import Education from "../components/sections/Education"
import ProfSkills from "../components/sections/ProfSkills"

import ContactBtn from "../components/ui/ContactBtn"
import Toggle from "../components/ui/Toggle"

const IndexPage = () => (
  <Layout>
    <SEO title="<Filenko />" />
    <div className="pattern-bg"></div>
    <div className="container">
      <aside>
        <Personal />
        <Contact />
        <Skills />
        <ContactBtn btnText="contact me" name="smile" />
        <Toggle />
      </aside>
      <main>
        <Education />
        <ProfSkills />
      </main>
    </div>
  </Layout>
)

export default IndexPage
