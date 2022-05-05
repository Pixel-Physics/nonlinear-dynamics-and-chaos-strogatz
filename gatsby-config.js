const config = {
  siteMetadata: {
    title: `book_nonlinear_dynamics_and_chaos`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
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
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".md", ".mdx"],
        // Layout
        // defaultLayouts: {
        //   default: require.resolve("./src/components/layout/index.js"),
        // },
        // Katex rendering
        remarkPlugins: [require("remark-math")],
        rehypePlugins: [require("rehype-katex")],
      },
    },
  ],
};

module.exports = config;
