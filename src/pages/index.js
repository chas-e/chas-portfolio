import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import AboutBlock from "../components/about-block";

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
      <h1> HELLO, my name is Charles (Chas) Eubanks.</h1>
      <h2>I am a dynamic & resourceful software engineer committed to building performant & elegant solutions for the web & beyond.</h2>
    </div>
  </Layout>
);

export default IndexPage;