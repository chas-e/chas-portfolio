import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
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
      <section id="intro" style={{ minHeight: `100vmin`, }}>
        <h1> HELLO, my name is Charles (Chas) Eubanks.</h1>
        <h2>I am a dynamic & resourceful software engineer committed to building performant & elegant solutions for the web & beyond.</h2>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <EmailButton />
        <SocMedia />
        <EmailLink />
      </section>

      <section id="about" style={{ minHeight: `100vmin`, }}>
        <AboutBlock />
      </section>

      <section id="projects">
        <ProjectBlock />
      </section>

      <section id="contact" style={{ minHeight: `88vmin`, }}>
        <Contact />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <EmailButton />
      </section>

    </div>
  </Layout>
);

export default IndexPage;