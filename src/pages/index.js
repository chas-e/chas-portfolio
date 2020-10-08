import React from "react"


import Layout from "../components/layout"
import SEO from "../components/seo"
import SocMedia from "../components/soc-media"
import EmailLink from "../components/email-link"
import AboutBlock from "../components/about-block"
import ProjectBlock from "../components/project-block"
import Contact from "../components/contact"
import EmailButton from "../components/email-button"


const IndexPage = () => (
  <Layout>
    <div style={
      {
        marginBottom: `1.45rem`,
        padding: `1.5rem`,
        maxWidth: `600px`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-around`,
      }
    }>
      <SEO title="chasengineering" />
      <section id="intro"
        style={{
          minHeight: `75vmin`,
          marginTop: `22vh`,
          padding: `1.45rem`,
        }}
      >
        <h2> H &nbsp; E &nbsp; L &nbsp; L &nbsp; O &nbsp;,
          <br />
          my name is Charles (Chas) Eubanks.</h2>
        <h3>I am a dynamic and resourceful software engineer committed to building fast, accessible, and elegant solutions for the web and beyond.</h3>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <EmailLink />

        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <SocMedia />
      </section>

      <section id="about"
        style={{
          minHeight: `75vmin`,
          margin: `0 auto`,
          padding: `1.45rem`,
        }}
      >
        <AboutBlock />
      </section>

      <section id="projects"
        style={{
          minHeight: `75vmin`,
          margin: `0 auto`,
          padding: `1.45rem`,
        }}
      >
        <ProjectBlock />
      </section>

      <section id="contact"
        style={{
          minHeight: `70vmin`,
          margin: `1rem`,
          padding: `1.45rem`,
        }}
      >
        <Contact />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <EmailButton />
      </section>

    </div>
  </Layout>
)

export default IndexPage