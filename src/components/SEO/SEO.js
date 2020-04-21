import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, keywords, image, url }) => {
  const {datoCmsSite: {faviconMetaTags: {tags}}} = useStaticQuery(query);

  return(
    <Helmet title={title}>
        <meta name="description" content={description} />
        <meta name="image" content={image} />
        <meta name="keywords" content={keywords} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://www.datocms-assets.com/24857/1585339966-opimage.jpg" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {
          tags.map(({tagName, attributes}, index) => {
            if(tagName === "link") {
              return (
                <link 
                key={`link-${index}`} 
                rel={attributes.rel} 
                sizes={attributes.sizes} 
                href={attributes.href} 
                type={attributes.type ? attributes.type : null}
                />
              )
            } else if(tagName === "meta") {
              return (
                <meta 
                key={`meta-${index}`} 
                name={attributes.name} 
                content={attributes.content} 
                />
              )
            }
          })
        }

        <meta name="google-site-verification" content="V2oB7WtNeabsNMCGx1kywlHcjfpR0jtWtCVqtkPz_ao" />
    </Helmet>
  )
}

export default SEO;

const query = graphql`
{
  datoCmsSite {
    faviconMetaTags {
      tags
    }
  }
}
`;