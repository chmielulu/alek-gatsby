import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image';
import Headline from '../Headline/Headline';
import { FaFacebookMessenger } from 'react-icons/fa';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";



const StyledSection = styled.section`
    padding: 80px 0 0 0;
    min-height: 900px;
    height: calc(100vh - 80px);
    position: relative;
`;

const AboutMeWrapper = styled.div`
    margin: 10px 0;
    width: 1000px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
`;

const PhotoWrapper = styled.div`
    width: 400px;
    height: 400px;
    position: relative;
`;

const ContentWrapper = styled.div`
    width: 600px;
`;

const RedCircle = styled.div`
    background: #F93C40;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(249, 60, 64, 0.25);
`;

const Photo = styled(Image)`
    width: 315px;
    height: 315px;
    border-radius: 50%;
    position: absolute !important; 
    bottom: 0;
    right: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ContentHeadline = styled.h3`
    width: 320px;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background: #F93C40;
    font-size: 24px;
    color: #fff;
    margin-left: 60px;
    box-shadow: 0px 2px 4px rgba(249, 60, 64, 0.25);
`;

const ContentParagraphsWrapper = styled.div`
    max-width: 535px;
    margin: 35px 0 35px 60px;
`;

const ContentParagraph = styled.p`
    font-size: 20px;
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
`;

const SocialIcon = styled(FaFacebookMessenger)`
    font-size: 30px;
    margin-right: 10px;
`;

const SocialText = styled.span`
    font-size: 16px;
`;


const AboutMe = () => {
    const {file: {childImageSharp: {fixed}}} = useStaticQuery(photoQuery);

    return (
        <StyledSection>
            <Headline>O mnie</Headline>
            <AboutMeWrapper>
                <ScrollAnimation animateIn='wobble'
                initiallyVisible={true}>
                <PhotoWrapper>
                   <RedCircle />
                   <Photo fixed={fixed} />
                </PhotoWrapper>
                </ScrollAnimation>
                <ScrollAnimation  animateIn='wobble'
                initiallyVisible={true}>
                <ContentWrapper>
                    <ContentHeadline>Aleksander Gadomski</ContentHeadline>
                    <ContentParagraphsWrapper>
                        <ContentParagraph>Po latach tworzenia różnych projektów nie widzę już normalnego świata. Wszędzie widzę źródła światła, shadery, vertexy i poligony. </ContentParagraph>
                        <ContentParagraph>Dziś wpada mi w ręce ciekawe zdjęcie, a jutro staram się je odwzorować w programie. </ContentParagraph>
                        <ContentParagraph>Każdy liść, stara ceglana ściana lub moje porysowane stare okulary są dla mnie referencją. </ContentParagraph>
                        <ContentParagraph>I przyznam, że uwielbiam to robić! </ContentParagraph>
                    </ContentParagraphsWrapper>
                    <SocialWrapper href="https://m.me/aleksander-gadomski" target="_blank">
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
  file(name: {eq: "myphoto"}) {
    childImageSharp {
      fixed(width: 315, height: 315, quality: 80) {
        ...GatsbyImageSharpFixed_withWebp_noBase64
      }
    }
  }
}   
`;

export default AboutMe;