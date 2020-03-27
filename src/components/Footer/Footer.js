import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';
import bxlYoutube from '@iconify/icons-bx/bxl-youtube';
import {graphql, useStaticQuery} from 'gatsby';

const StyledFooter = styled.footer`
    padding: 80px 0 0;
    background: #f93c40;
    padding: 75px 0 0 0;
`;

const Copyright = styled.div`
    margin-left: 15%;
    width: 454px;

    h4 {
        font-size: 2.063rem;
        width: 100%;
        text-transform: uppercase;
        color: #fff;
        font-weight: 800;
        line-height: 2.5;
    }

    p{
        width: 100%;
        text-align: center;
        color: #fff;
    }

    @media (min-width: 2200px) {
        width: 645px;
    }

    @media (max-width: 1600px) {
        margin-left: 10%;
    }

    @media (max-width: 1150px) {
        margin-left: 5%;
    }

    @media (max-width: 1000px) {
        margin: auto;
        padding-top: 250px;
        width: 390px;
    }

    @media (max-width: 500px) {
        width: 100%;
        text-align: center;
    }

    @media (max-width: 420px) {
        h4 {
            font-size: 1.5rem;
        }

        p {
            
        }
    }
`;

const SocialMedia = styled.div`
    margin-left: 15%;
    margin-top: 30px;
    width: 454px;
    display: flex;
    justify-content: center;
    
    a {
        margin-right: 15px;
        color: #fff;
        text-decoration: none;
        font-size: 2.188rem;

        :focus {
            outline: 1px solid #0078FF;
        }
    }

    @media (min-width: 2200px) {
        width: 645px;
    }

    @media (max-width: 1600px) {
        margin-left: 10%;
    }

    @media (max-width: 1150px) {
        margin-left: 5%;
    }

    @media (max-width: 1000px) {
        margin: 30px auto 0 auto;
    }

    @media (max-width: 500px) {
        width: 100%;
    }
`;

const Author = styled.span`
    display: block;
    margin-top: 150px;
    padding-bottom: 30px;
    margin-left: 40px;
    font-family: 'Caveat', cursive;
    color: #fff;
`;

const Footer = () => {
    const year = new Date().getFullYear();
    const data = useStaticQuery(footerQuery);
    const igLink = data.datoCmsInstagram.link;
    const ytLink = data.datoCmsYoutube.link;
    
    return (
    <StyledFooter>
        <Copyright data-sal="fade" data-sal-duration="300" data-sal-easing="ease-out-back">
            <h4>Aleksander Gadomski</h4>
            <p>{year} &copy; Wszelkie prawa zastrzeżone</p>
        </Copyright>
        <SocialMedia data-sal="fade" data-sal-duration="300" data-sal-easing="ease-out-back" data-sal-delay="200">
            <a href={igLink} target="_blank" rel="noopener noreferrer"><Icon icon={bxlInstagram} /></a>
            <a href={ytLink} target="_blank" rel="noopener noreferrer"><Icon icon={bxlYoutube} /></a>
        </SocialMedia>
        <Author>Designed with love by Chmielewski Jakub, my friend :)</Author>
    </StyledFooter>
    )
};

const footerQuery = graphql`
{
    datoCmsInstagram {
        link
      }
      datoCmsYoutube {
        link
      }
}
`;

export default Footer;