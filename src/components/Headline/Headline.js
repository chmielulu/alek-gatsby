import React from 'react';
import styled from 'styled-components'; 
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


const Text = styled.h2`
    font-weight: 700;
    font-size: 30px;
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    color: #2c2c2c;
    padding-bottom: 15px;
    position: relative;

    ::before {
        width: 30%;
        content: '';
        height: 2px;
        background: #101010;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
    }
`;

const Headline = ({children}) => (
    <header>
            <Text
            data-sal="fade"
            data-sal-easing="ease"
            data-sal-duration="500"
            >{children}
            </Text>
    </header>
);

export default Headline;