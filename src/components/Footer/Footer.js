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
        font-size: 33px;
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
        font-size: 35px;
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
        <Copyright>
            <h4>Aleksander Gadomski</h4>
            <p>2020 &copy; Wszelkie prawa zastrzeżone</p>
        </Copyright>
        <SocialMedia>
            <a href="https://www.instagram.com/aleksandergadomski/"><Icon icon={bxlInstagram} /></a>
            <a href="https://www.youtube.com/channel/UC1BSR4tO1VEizm4f71aTdKg"><Icon icon={bxlYoutube} /></a>
        </SocialMedia>
        <Author>Designed with love by Chmielewski Jakub, my friend :)</Author>
    </StyledFooter>
);

export default Footer;