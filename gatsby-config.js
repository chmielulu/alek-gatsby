require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Aleksander Gadomski Portfolio`,
    description: `Website for Aleksander Gadomski`,
    author: `@chmielulu`,
    siteUrl: `https://aleksandergadomski.pl/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://aleksandergadomski.pl/',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `500`,`600`, `700`, `800`],
            subsets: [`latin-ext`]
          },
          {
            family: `Caveat`,
            variants: [`400`]
          },
        ],
      },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        specialChars: '/:',
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.API_DATO_CMS
      }
    }
  ],
}
