import React from "react";


import Layout from "../components/layout";
import SEO from "../components/seo";
import SocMedia from "../components/soc-media";
import EmailLink from "../components/email-link";
import AboutBlock from "../components/about-block";
import ProjectBlock from "../components/project-block";
import Contact from "../components/contact";
import EmailButton from "../components/email-button";


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
          minHeight: `100vmin`,
          marginTop: `22vh`,
          padding: `1.45rem`,
        }}
      >
        <h1> HELLO, my name is Charles (Chas) Eubanks.</h1>
        <h2>I am a dynamic & resourceful software engineer committed to building performant & elegant solutions for the web & beyond.</h2>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <EmailLink />

        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

        <SocMedia />
      </section>

      <section id="about"
        style={{
          minHeight: `100vmin`,
          margin: `0 auto`,
          padding: `1.45rem`,
        }}
      >
        <AboutBlock />
      </section>

      <section id="projects"
        style={{
          minHeight: `100vmin`,
          margin: `0 auto`,
          padding: `1.45rem`,
        }}
      >
        <ProjectBlock />
      </section>

      <section id="contact"
        style={{
          minHeight: `70vmin`,
          margin: `2rem`,
          padding: `1.45rem`,
        }}
      >
        <Contact />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <EmailButton />
      </section>

    </div>
  </Layout>
);

export default IndexPage;