const config = {
  siteMetadata: {
    title: `book_nonlinear_dynamics_and_chaos`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  pathPrefix: '/nonlinear-dynamics-and-chaos-strogatz',
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-tsconfig-paths",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      //@ts-ignore
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      //@ts-ignore
      __key: "pages",
    },
  ],
};

module.exports = config;
