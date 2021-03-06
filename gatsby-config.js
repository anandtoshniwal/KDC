// const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")

// const { theme } = resolveConfig(tailwindConfig)

module.exports = {
  siteMetadata: {
    title: "Kranti Dental Clinic",
    author: "Melanie Nolan",
    description: "A Gatsby starter to set you up with Tailwind CSS",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     name: "Gatsby Starter Tailwind CSS",
    //     short_name: "Gatsby Starter Tailwind CSS",
    //     start_url: "/",
    //     // background_color: theme.colors.white,
    //     // theme_color: theme.colors.teal[500],
    //     icon: "static/icon.svg",
    //   },
    // },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
  ],
}
