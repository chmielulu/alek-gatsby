import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import ReviewsSection from './ReviewsSection/ReviewsSection';
import ReviewSlider from './ReviewSlider/ReviewSlider';
import { Icon } from '@iconify/react';
import bxsQuoteAltLeft from '@iconify/icons-bx/bxs-quote-alt-left';
import bxsQuoteAltRight from '@iconify/icons-bx/bxs-quote-alt-right';

const personsPhotoQuery = graphql`
{
  allFile(filter: {name: {regex: "/person/"}}) {
    nodes {
      childImageSharp {
        fixed(width: 140, height: 140, quality: 90) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
}
`;

const Review = styled.div`
  width: 810px;
  align-items: center;
  display: flex;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 2200px) {
    width: 1010px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 350px;
  }
`;

const ReviewPersonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
`;

const ReviewPersonImage = styled(Image)`
  width: 140px!important;
  height: 140px!important;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 50%!important;

  img, source{
    width: 140px!important;
    height: auto!important;
    border-radius: 50%!important;
  }
`;

const ReviewPersonName = styled.h3`
  margin-top: 15px;
  text-transform: uppercase;
  color: #2c2c2c;
  font-weight: 500;
  width: 130%;
  text-align: center;
  position: relative;
`;

const ReviewContentWrapper = styled.div`
  margin-left: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;

  @media (max-width: 1000px) {
    margin-top: 20px;
  }
`;

const ReviewContentParagraph = styled.p`
  font-size: 1.375rem;
  color: #2c2c2c;
  text-align: justify;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  color: #2c2c2c;
  font-size: 1.125rem;
`;

const QuoteLeft = styled(StyledIcon)`
  left: 0;
  top: 0;
`;

const QuoteRight = styled(StyledIcon)`
  right: 0;
  bottom: 0;
`;

const Reviews = () => {
  const {allFile: {nodes}} = useStaticQuery(personsPhotoQuery);

  return(
    <ReviewsSection>
      <ReviewSlider quantity={nodes.length}>
        {nodes.map(({childImageSharp: {fixed}}, index) => {
          let name = "";
          let content = "";

          if(index !== 0) {
            return null
          }

          switch(index) {
            case 0: 
              name = "Tomasz Lach";
              content = "Aleksander Gadomski pomagał mi w projekcie jako konsultant do spraw animacji 3D.  Wykazal się zaangażowaniem i wiedzą które  pomogły w realizacji zadania i znacznie ją przyśpieszyły. Polecam go jako zawsze chętnego do pomocy i skupionego na potrzebach klienta."
            break;

            case 1:
              name = "Adrian Werle";
              content = "Bardzo dobra robota. Profesjonalne podejście do klienta. Przyzwoita cena, praca na czas. Jak najbardziej polecam współpracę."
            break;

            case 2:
              name = "Rafał Kalinowski";
              content = "Alek to świetny grafik oraz wizualizator wnętrz! Z pewnością wrócę do współpracy z nim w najbliższym czasie, polecam!"
            break;

            case 3:
              name = "Tetiana Paruzel";
              content = "Alek jest jednym z niewielu konkretnych grafików. Dopracowuje nawet najmniejszy szczegół dla jak najlepszego efektu. Współpraca z nim to sama przyjemność, polecam!";
            break;

            default:
              throw new Error("Nie ma takiej osoby w bazie danych!");
          }

          return (
            <Review key={index}>
              <ReviewPersonWrapper>
                <ReviewPersonImage fixed={fixed} />
                <ReviewPersonName>{name}</ReviewPersonName>
              </ReviewPersonWrapper>
              <ReviewContentWrapper>
                <QuoteLeft icon={bxsQuoteAltLeft} />
                <ReviewContentParagraph>
                  {content}
                </ReviewContentParagraph>
                <QuoteRight icon={bxsQuoteAltRight} />
              </ReviewContentWrapper>
            </Review>
          )
        })}
      </ReviewSlider>
    </ReviewsSection>
  )
}

export default Reviews;