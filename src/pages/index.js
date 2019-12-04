import React from "react"
// import { Link } from "gatsby"
import "../components/scss/main.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Personal from "../components/Personal"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="pattern-bg"></div>
      <div className="container">
        <aside>
         <Personal />
        </aside>
        <main>
        </main>
      </div>
  </Layout>
)

export default IndexPage
