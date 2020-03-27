import React, {useState} from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const GalleryWrapper = styled.div`
    margin: 50px auto 0 auto;
    width: 90%;
    max-width: 1920px;
    column-count: 2;
    column-gap: 1em;

    @media (max-width: 800px) {
        column-count: 1;
    }
`;

const GalleryItem = styled.div`
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  cursor: pointer;
`;

const imagesQuery = graphql`
{
    allDatoCmsGallery {
        nodes {
          image {
            fluid (imgixParams: {auto: "compress"}) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
    }
}   
`;

const images = [];

const Gallery = () => {
    const {allDatoCmsGallery: {nodes}} = useStaticQuery(imagesQuery);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);


    return (
        <GalleryWrapper>
        {nodes.map(({image: {fluid}}, index) => {
            images[index] = fluid.src;  

            return(
                <GalleryItem
                key={index}
                alt=""
                className={`image${index}`}
                onClick={(e) => {
                    setPhotoIndex(index);
                    setIsOpen(true);
                }}
                data-sal="zoom-in"
                data-sal-easing="ease-in-out"
                data-sal-duration="500"
                
                >
                    <Image fluid={fluid} />
                </GalleryItem>
            );
        })}

        {isOpen && (
        <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>  setPhotoIndex((photoIndex + images.length - 1) % images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
        />
        )}
        </GalleryWrapper>    
    )
}

export default Gallery;