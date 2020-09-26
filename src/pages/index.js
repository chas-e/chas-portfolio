import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import SocMedia from "../components/soc-media";
import AboutBlock from "../components/about-block";
import ProjectBlock from "../components/project-block";
import Contact from "../components/contact";


const IndexPage = () => (
  <Layout>
    <div style={
      {
        maxWidth: `400px`,
        marginBottom: `1.45rem`,
        height: `100%`,
      }
    }>
      <SEO title="chasengineering" />
      <section id="intro" style={{ height: `100%`, }}>
        <h1> HELLO, my name is Charles (Chas) Eubanks.</h1>
        <h2>I am a dynamic & resourceful software engineer committed to building performant & elegant solutions for the web & beyond.</h2>
      </section>

      <section id="about" style={{ height: `100%`, }}>
        <AboutBlock />
      </section>

      <section id="projects" style={{ height: `100%`, }}>
        <ProjectBlock />
      </section>

      <section id="contact" style={{ height: `100%`, }}>
        <Contact />
      </section>

    </div>
  </Layout>
);

export default IndexPage;