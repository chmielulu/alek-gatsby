import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import { Icon} from '@iconify/react';
import printer3d from '@iconify/icons-mdi/printer-3d';
import welcomeLearnMore from '@iconify/icons-dashicons/welcome-learn-more';
import bxsVideoRecording from '@iconify/icons-bx/bxs-video-recording';
import roundMovieFilter from '@iconify/icons-ic/round-movie-filter';
import chart3d from '@iconify/icons-vaadin/chart-3d';
import youtubeCircle from '@iconify/icons-jam/youtube-circle';


const StyledSection = styled.section`
`;

const ThingsBackgroud = styled.div`
    width: 65%;
    min-width: 900px;
    max-width: 1900px;
    margin: auto;
    height: 230px;
    background: #202020;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(32, 32, 32, 0.25);

    @media (min-width: 2200px) {
        height: 330px;
    }

    @media (max-width: 1000px) {
        display: none;
    }
`;

const ThingsWrapper = styled.div`
    width: 100%;
    height: 365px;
    position: relative;

    :first-of-type{
        margin-top: 150px;
        margin-bottom: 135px;
    }

    @media (min-width: 2200px) {
        height: 465px;
    }

    @media (max-width: 1000px) {
        height: unset;

        :first-of-type{
            margin-top: 150px;
            margin-bottom: 40px;
        }
    }
`;

const ThingsColumn = styled.div`
    width: 685px;
    height: 250px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    justify-content: space-between;

    @media (min-width: 2200px) {
        width: 985px;
        height: 350px;
    }

    @media (max-width: 1000px) {
        position: sticky;
        transform: none;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        height: unset;
    }
`;

const Thing = styled.div`
    background: #fff;
    width: 200px;
    height: 250px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 2200px) {
        width: 300px;
        height: 350px;
    }

    @media (max-width: 1000px) {
        margin-top: 40px;

        :first-of-type {
            margin-top: 0;
        }
    }
`;


const ThingIcon = styled(Icon)`
    color: #3e3e3e;
    font-size: 6.25rem;
    margin-top: 20px;
`;

const ThingText = styled.h3`
    font-size: 1.375rem;
    color: #202020;
    font-weight: 700;
    max-width: 80%;
    line-height: 27px;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 40px;
`;

const WhatIdo = () => (
    <StyledSection>
        <Headline>Czym się zajmuję?</Headline>
        <ThingsWrapper>
            <ThingsBackgroud data-sal="slide-right" data-sal-easing="ease" data-sal-duration="500" />
            <ThingsColumn>
                <Thing data-sal="flip-up" data-sal-easing="ease" data-sal-duration="300" data-sal-delay="500">
                    <ThingIcon icon={printer3d} />
                    <ThingText>Druk 3D</ThingText>
                </Thing>

                <Thing data-sal="flip-up" data-sal-easing="ease" data-sal-duration="300" data-sal-delay="500">
                    <ThingIcon icon={chart3d} />
                    <ThingText>Wizualizacje</ThingText>
                </Thing>

                <Thing data-sal="flip-up" data-sal-easing="ease" data-sal-duration="300" data-sal-delay="500">
                    <ThingIcon icon={roundMovieFilter} />
                    <ThingText>Animacje</ThingText>
                </Thing>
            </ThingsColumn>
        </ThingsWrapper>

        <ThingsWrapper>
            <ThingsBackgroud data-sal="slide-right" data-sal-easing="ease" data-sal-duration="500" />
            <ThingsColumn>
                <Thing data-sal="flip-up" data-sal-easing="ease" data-sal-duration="300" data-sal-delay="500">
                    <ThingIcon icon={youtubeCircle} />
                    <ThingText>Oprawa graficzna</ThingText>
                </Thing>

                <Thing data-sal="flip-up" data-sal-easing="ease" data-sal-duration="300" data-sal-delay="500">
                    <ThingIcon icon={bxsVideoRecording} />
                    <ThingText>Montaż wideo</ThingText>
                </Thing>

                <Thing data-sal="flip-up" data-sal-easing="ease" data-sal-duration="300" data-sal-delay="500">
                    <ThingIcon icon={welcomeLearnMore} />
                    <ThingText>Konsultacje</ThingText>
                </Thing>
            </ThingsColumn>
        </ThingsWrapper>
    </StyledSection>
);

export default WhatIdo;