module.exports = {
  siteMetadata: {
    title: `CV page`,
    description: `made with ❤ using React, Gatsby, react-icons, deployed on netlify`,
    author: `@roman.filenko`,
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
        name: `gatsby based cv`,
        short_name: `cv`,
        start_url: `/`,
        background_color: `#38b2ac`,
        theme_color: `#38b2ac`,
        display: `minimal-ui`,
        // icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
  ],
}
