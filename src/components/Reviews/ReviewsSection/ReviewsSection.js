import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const backgroundQuery = graphql`
{
    datoCmsReviewsBackground {
        image {
          fluid(maxWidth: 1920, imgixParams: {auto: "compress"}) {
            ...GatsbyDatoCmsFluid_noBase64
          }
        }
    }
}
`;


const Section = ({className, children}) => {
    const {datoCmsReviewsBackground: {image: {fluid}}} = useStaticQuery(backgroundQuery);

    return (

          <BackgroundImage
            Tag="section"
            fluid={fluid}
            backgroundColor={`#202020`}
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
  overflow: hidden;

  @media (min-width: 2200px) {
    height: 800px;
  }

  @media (max-width: 1000px) {
    height: 700px;
  }
`;

export default ReviewsSection