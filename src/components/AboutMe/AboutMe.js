import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image';
import Headline from '../Headline/Headline';
import { FaFacebookMessenger } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const StyledSection = styled.section`
    padding: 200px 0 0 0;

    @media (max-width: 1000px) {
        padding: 80px 0;
    }
`;

const AboutMeWrapper = styled.div`
    margin: auto;
    padding: 200px 0;
    width: 1000px;
    display: flex;

    @media (min-width: 2200px) {
        width: 1100px;
    }

    @media (max-width: 1200px) {
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 100px 0 100px 0;
    }

    @media (max-width: 1000px) {
       padding: 100px 0 0;
    }
`;

const PhotoWrapper = styled.div`
    width: 400px;
    height: 400px;
    position: relative;

    @media (min-width: 2200px) {
        width: 500px;
        height: 500px;
    }

    @media (max-width: 1000px) {
        width: 300px;
        height: 300px;
    }
`;

const ContentWrapper = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;

    @media (max-width: 1200px) {
        margin-top: 60px;
        align-items: center;
    }

    @media (max-width: 650px) {
        width: 100%;
    }
    
`;

const RedCircle = styled.div`
    background: #F93C40;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(249, 60, 64, 0.25);

    @media (min-width: 2200px) {
        width: 400px;
        height: 400px;
    }
    
    @media (max-width: 1000px) {
        width: 235px;
        height: 235px;
    }
`;

const Photo = styled(Image)`
    width: 315px;
    height: 315px;
    border-radius: 50%;
    position: absolute !important;
    bottom: 0;
    right: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 2200px) {
        width: 415px;
        height: 415px;
    }

    @media (max-width: 1000px) {
        width: 250px;
        height: 250px;
    }
`;

const ContentHeadline = styled.h3`
    width: 320px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background: #F93C40;
    font-size: 1.5rem;
    color: #fff;
    margin-left: 60px;
    box-shadow: 0px 2px 4px rgba(249, 60, 64, 0.25);

    @media (min-width: 2200px) {
        width: 430px!important;
        height: 57px!important;
    }

    @media (max-width: 1000px) {
        width: 280px!important;
    }

    @media (max-width: 1200px) {
        margin: 0;
    }
`;

const ContentParagraphsWrapper = styled.div`
    max-width: 535px;
    margin: 35px 0 35px 60px;

    @media (max-width: 1000px) {
        max-width: 400px;
        margin: 35px 0;
    }

    @media (max-width: 500px) {
        width: 80%;
    }
`;

const ContentParagraph = styled.p`
    font-size: 1.25rem;
    margin-bottom: 20px;

    :last-of-type{
        margin-bottom: 0;
    }
`;

const SocialWrapper = styled.a`
    margin-left: 60px;
    color: #0078FF;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media (max-width: 1000px) {
        margin: 0;
    }
`;

const SocialIcon = styled(FaFacebookMessenger)`
    font-size: 1.875rem;
    margin-right: 10px;
`;

const SocialText = styled.span`
    font-size: 1rem;
`;


const AboutMe = () => {
    const data = useStaticQuery(photoQuery);
    const {allDatoCmsAboutMe: {nodes}} = data;
    const {datoCmsMessenger: {link}} = data;

    return (
        <StyledSection id="aboutMe">
            <Headline>O mnie</Headline>
            <AboutMeWrapper>
                <ScrollAnimation animateIn='wobble'
                initiallyVisible={true} animateOnce={true}>
                <PhotoWrapper>
                   <RedCircle />
                   <Photo fluid={nodes[0].image.fluid} />
                </PhotoWrapper>
                </ScrollAnimation>
                <ScrollAnimation  animateIn='wobble'
                initiallyVisible={true} animateOnce={true}>
                <ContentWrapper>
                    <ContentHeadline>{nodes[0].name}</ContentHeadline>
                    <ContentParagraphsWrapper>
                        {
                            nodes[0].description.map(({paragraph, id}, index) => (
                               <ContentParagraph key={id}>{paragraph}</ContentParagraph> 
                            ))
                        }
                    </ContentParagraphsWrapper>
                    <SocialWrapper href={`https://${link}`} target="_blank" rel="noopener noreferrer">
                        <SocialIcon></SocialIcon>
                        <SocialText>Skontaktuj się ze mną!</SocialText>
                    </SocialWrapper>
                </ContentWrapper>
              </ScrollAnimation>
            </AboutMeWrapper>
        </StyledSection>
    );
};

const photoQuery = graphql`
{
    allDatoCmsAboutMe {
        nodes {
          name
          image {
            fluid(maxWidth: 415, maxHeight: 415, imgixParams: {auto: "compress"}) {
                ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          description {
            ... on DatoCmsDescription {
              id
              paragraph
            }
          }
        }
      }

      datoCmsMessenger {
        link
      }
}
`;

export default AboutMe;
