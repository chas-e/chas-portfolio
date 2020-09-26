import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = () => (<
  Layout >
  <
    SEO title="chasengineering" />
  <h1 style={{ border: `none`, }}> HELLO!! </h1>
  <p> This is Charles Eubanks's Portfolio.</p>
  <p> Kick the tires... </p>
  <p> Now let's start something GREAT!! </p>
  <div style={
    {
      maxWidth: `300px`,
      marginBottom: `1.45rem`
    }
  }>
    <Image />

  </div>
</Layout>
);

export default IndexPage