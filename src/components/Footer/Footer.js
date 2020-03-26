import React from 'react';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import bxlInstagram from '@iconify/icons-bx/bxl-instagram';
import bxlYoutube from '@iconify/icons-bx/bxl-youtube';

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
`;

const Author = styled.span`
    display: block;
    margin-top: 150px;
    padding-bottom: 30px;
    margin-left: 40px;
    font-family: 'Caveat', cursive;
    color: #fff;
`;

const Footer = () => (
    <StyledFooter>
        <Copyright data-sal="fade" data-sal-duration="300" data-sal-easing="ease-out-back">
            <h4>Aleksander Gadomski</h4>
            <p>2020 &copy; Wszelkie prawa zastrzeżone</p>
        </Copyright>
        <SocialMedia data-sal="fade" data-sal-duration="300" data-sal-easing="ease-out-back" data-sal-delay="200">
            <a href="https://www.instagram.com/aleksandergadomski/" target="_blank" rel="noopener noreferrer"><Icon icon={bxlInstagram} /></a>
            <a href="https://www.youtube.com/channel/UC1BSR4tO1VEizm4f71aTdKg" target="_blank" rel="noopener noreferrer"><Icon icon={bxlYoutube} /></a>
        </SocialMedia>
        <Author>Designed with love by Chmielewski Jakub, my friend :)</Author>
    </StyledFooter>
);

export default Footer;