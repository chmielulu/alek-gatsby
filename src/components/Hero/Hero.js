import React from 'react';
import styled from 'styled-components';
import { FaCubes } from 'react-icons/fa';
import { IoIosArrowRoundDown } from 'react-icons/io';

const HeroWrapper = styled.div`
    min-width: 850px;
    height: 100%;
    position: relative;
    width: 44%;
`;

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: #f93c40;
`;

const HeroContentWrapper = styled.div`
    width: 700px;
    height: 400px;
    position: absolute;
    right: 0;
    top: 45%;
    transform: translateY(-50%);
`;

const HeroHeadline = styled.div`
    width: 75%;
    height: 160px;
    margin-left: 30%;
    transform: translateX(25%);

    h1 {
        font-size: 5.625rem;
        color: #2c2c2c;
        line-height: .8;
    }

    p{
        font-size: 4.375rem;
        color: #fff;
        font-weight: bold;
    }
`;

const Cubes = styled(FaCubes)`
    font-size: 20rem;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: 0;
`;

const Button = styled.button`
    width: 80px;
    height: 95px;
    border-radius: 80px;
    background: #fff;
    border: none;
    transition: 0.2s;
    position: absolute;
    font-size: 3.125rem;
    right: 6%;
    top: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    color: #2d2d2d;

    :hover{
        height: 125px;
    }

    :focus {
        outline: 1px solid #0078FF;
    }
`;

const Hero = () => (   
    <HeroWrapper>
        <Background />
        <HeroContentWrapper>
            <HeroHeadline>
                <h1>Grafika 3D</h1>
                <p>z pasją</p>
            </HeroHeadline>
            <Cubes />
            <Button>
                <IoIosArrowRoundDown />
            </Button>
        </HeroContentWrapper>
    </HeroWrapper>
);

export default Hero;