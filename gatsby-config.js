require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `chasengineering`,
    description: `charles eubanks is a dynamic & resourceful software engineer committed to building performant & elegant solutions for the web and beyond.`,
    author: `@chas-e`,
    siteUrl: "https://www.chasengineering.dev",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/ChasEngineering",
      },
      {
        name: "github",
        url: "https://github.com/chas-e",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/charlespatrickeubanks/",
      },

    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `charles eubanks's portfolio`,
        short_name: `chasengineering`,
        start_url: `/`,
        background_color: `#e8e3e3`,
        theme_color: `#e8e3e3`,
        display: `minimal-ui`,
        icon: `src/images/chasengineering-icon-512x512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}