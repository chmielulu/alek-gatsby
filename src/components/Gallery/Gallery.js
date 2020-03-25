import React, {useState} from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import {isWebpSupported} from 'react-image-webp/dist/utils';

const GalleryWrapper = styled.div`
    margin: 50px auto 0 auto;
    width: 90%;
    max-width: 1920px;
    column-count: 3;
    column-gap: .5em;
`;

const GalleryItem = styled.div`
  display: inline-block;
  margin: 0 0 .5em;
  width: 100%;
  cursor: pointer;
`;

const imagesQuery = graphql`
{
    allFile(filter: {name: {regex: "/image/"}}) {
    nodes {
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
            id
        }
    }
    }
}   
`;

const images = [];

const Gallery = () => {
    const {allFile: {nodes}} = useStaticQuery(imagesQuery);
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <GalleryWrapper>
        {nodes.map(({childImageSharp: {fluid}}, index) => {
            isWebpSupported ? images[index] = fluid.srcWebp : images[index] = fluid.src;                   

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