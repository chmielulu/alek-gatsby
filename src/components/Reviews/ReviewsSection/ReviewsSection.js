import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const backgroundQuery = graphql`
{
    file(name: {eq: "reviews"}) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90, duotone: {
            highlight: "#f93c40",
            shadow: "#192550"
          }) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
    }
}
`;


const Section = ({className, children}) => {
    const {file: {childImageSharp: {fluid}}} = useStaticQuery(backgroundQuery);

    return (

          <BackgroundImage
            Tag="section"
            fluid={fluid}
            backgroundColor={`#000`}
            className={className}
          >
          {children}
          </BackgroundImage>

    )
};


const ReviewsSection = styled(Section)`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed; 
  background-position: center; 
`;

export default ReviewsSection