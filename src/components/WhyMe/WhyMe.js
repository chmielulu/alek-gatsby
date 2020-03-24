import React from 'react';
import Headline from '../Headline/Headline';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import supportkitIcon from '@iconify/icons-logos/supportkit';
import fireIcon from '@iconify/icons-noto/fire';
import timerClock from '@iconify/icons-noto/timer-clock';

const StyledSection = styled.section`
    padding: 200px 0 0;
`;

const WhyMeWrapper = styled.div`
    width: 1100px;
    padding: 200px 0;
    display: flex;
    justify-content: space-between;
    margin: auto;
`;

const WhyMeItem = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const WhyMeItemIcon = styled(Icon)`
    font-size: 120px;
`;

const WhyMeItemHeadline = styled.h3`
    font-size: 30px;
    text-align: center;
    color: #2c2c2c;
    margin: 20px 0;
`;

const WhyMeItemText = styled.p`
    font-size: 20px;
    width: 250px;
`;

const WhyMe = () => (
    <StyledSection>
        <Headline>Dlaczego ja?</Headline>
        <WhyMeWrapper>
            <WhyMeItem data-sal="zoom-out" data-sal-easing="ease-in-out" data-sal-duration="300" >
                <WhyMeItemIcon icon={supportkitIcon} />
                <WhyMeItemHeadline>Profesjonale podejście</WhyMeItemHeadline>
                <WhyMeItemText>Darmowa pomoc, sprawna komunikacja i wgląd do efektów pracy nad projektem na bieżąco.</WhyMeItemText>
            </WhyMeItem>

            <WhyMeItem data-sal="zoom-out" data-sal-easing="ease-in-out" data-sal-duration="300" data-sal-delay="200">
                <WhyMeItemIcon icon={timerClock} />
                <WhyMeItemHeadline>Szybka realizacja zlecenia</WhyMeItemHeadline>
                <WhyMeItemText>Ustalamy szczegóły i bierzemy się do pracy, bez zbędnego gadania! </WhyMeItemText>
            </WhyMeItem>

            <WhyMeItem data-sal="zoom-out" data-sal-easing="ease-in-out" data-sal-duration="300" data-sal-delay="400">
                <WhyMeItemIcon icon={fireIcon} />
                <WhyMeItemHeadline>Wysoka jakość projektów</WhyMeItemHeadline>
                <WhyMeItemText>W Twój projekt angażuję się na 100% przy pomocy profesjonalnych narzędzi</WhyMeItemText>
            </WhyMeItem>
        </WhyMeWrapper>
    </StyledSection>
);

export default WhyMe;