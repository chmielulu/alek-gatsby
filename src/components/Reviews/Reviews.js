import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import ReviewsSection from './ReviewsSection/ReviewsSection';
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

const DotsWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);


    @media (min-width: 2200px) {
        bottom: 40px;
    }
`; 

const Dot = styled.span`
    display: block;
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;

    ::before {
        width: 10px;
        height: 10px;
        content: '';
        background: #2c2c2c;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        opacity: 0;
        transition: .3s opacity;
    }

    &.activeDot ::before {
      opacity: 1;
    }

    @media (min-width: 2200px) {
        margin-right: 10px;
    }
`;

const ReviewsSlider = styled.div`
  position: relative;
  width: 870px;
  height: 261px;

  @media (min-width: 2200px) {
    width: 1070px;
    height: 282px;
  }

  @media (max-width: 1000px) {
    width: 390px;
    height: 519px;
  }

  @media (max-width: 500px) {
    width: 290px;
    height: 453px;
  }
`;

const ReviewsSliderWrapper = styled.div`
  display: flex;
  position: absolute;
  transition: transform 1000ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;


const Review = styled.div`
  width: 810px;
  align-items: center;
  display: flex;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  flex: 1;
  min-width: 810px;
  opacity: 0.5;
  transform: scale(0.8);
  transition: opacity 1000ms linear, transform 1000ms cubic-bezier(0.455, 0.03, 0.515, 0.955);

  &.activeReview {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-width: 2200px) {
    width: 1010px;
    min-width: 1010px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    width: 350px;
    padding: 30px 20px;
    min-width: 350px;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 500px) {
    width: 250px;
    min-width: 250px;
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

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const ReviewContentWrapper = styled.div`
  margin-left: 30px;
  padding-left: 30px;
  padding-right: 30px;
  position: relative;

  @media (max-width: 1000px) {
    margin-top: 20px;
    margin-left: 0;
  }
`;

const ReviewContentParagraph = styled.p`
  font-size: 1.375rem;
  color: #2c2c2c;
  text-align: justify;

  @media (max-width: 500px) {
    font-size: 1rem;
  }
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
  const [property, setProperty] = useState(nodes[0]);
  
  let changeReview;

  useEffect(() => {
    changeReview = setTimeout(() => {

      let indexOfReview = nodes.indexOf(property)
      
      if(indexOfReview===nodes.length - 1) {
        setProperty(nodes[0]);
      } else {
        setProperty(nodes[++indexOfReview]);
      }

    }, 7000)
  });

  return(
    <ReviewsSection>
      <ReviewsSlider>
        <ReviewsSliderWrapper style={{'transform': `translateX(-${nodes.indexOf(property)*(100/nodes.length)}%)`}}>
        {nodes.map(({childImageSharp: {fixed}}, index) => {
          let name = "";
          let content = "";

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
            <Review key={index} className={index === nodes.indexOf(property) ? 'activeReview' : null}>
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

        </ReviewsSliderWrapper>
      </ReviewsSlider>
      <DotsWrapper>
          { nodes.map((node, index) => {

            return (
              <Dot 
                className={index === nodes.indexOf(property) ? `activeDot` : null} 
                onClick={() => {
                  clearInterval(changeReview);
                  setProperty(node)
                }}
              />
            )

          })}
        </DotsWrapper>
    </ReviewsSection>
  )
}

export default Reviews;