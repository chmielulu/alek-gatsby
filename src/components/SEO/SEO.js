import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords, image, url }) => (
  <StaticQuery
    query={query}
    render={({
      file: {
        childImageSharp: {
            fixed: {
                src
            }
        }
      }
    }) => (
        <>
        <Helmet title={title}>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <meta name="keywords" content={keywords} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <link rel="shortcut icon" href={src} type="image/png" />
        </Helmet>
        </>
      )
    }
  />
)

export default SEO;

const query = graphql`
    query MyQuery {
        file(name: {eq: "favicon"}) {
        childImageSharp {
            fixed(width: 150, height: 150) {
            src
            }
        }
        }
    }
`;