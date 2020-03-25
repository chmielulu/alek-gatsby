import React from 'react';
import Headline from '../Headline/Headline';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import sharpAlternateEmail from '@iconify/icons-ic/sharp-alternate-email';
import phoneIcon from '@iconify/icons-jam/phone';
import { FaFacebookMessenger } from 'react-icons/fa';

const StyledSection = styled.section`
    padding: 80px 0;
    position: relative;
`;

const ContactWrapper = styled.div`
    padding: 200px 0 100px 10%;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const StyledIconifyIcon = styled(Icon)`
    font-size: 1.563rem;
    margin-right: 15px;
    color: #f93c40;
`;

const StyledMessengerIcon = styled(FaFacebookMessenger)`
    font-size: 1.563rem;
    margin-right: 15px;
    color: #f93c40;
`;

const ContactFormWrapper = styled.div`
    position: absolute;
    right: 5%;
    width: 450px;
    height: 500px;
    border-radius: 60px;
    background: #fff;
    bottom: 0;
    transform: translateY(50%);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.41);
    padding-top: 50px;
    padding-left: 40px;

    h3 {
        font-size: 1.625rem;
        text-transform: uppercase;
    }
`;

const SmallInput = styled.input`
    border: 1.1px solid #f93c40 !important;
    width: 290px;
    height: 20px;
    margin-bottom: 20px;
    padding: 10px;
    display: block;
    transition: 0.2s;

    :focus {
        box-shadow: 0px 0px 15px -3px #9e9e9e;
        outline: none;
    }
`;

const ContactForm = styled.form`
    margin-top: 40px;
`;

const LargeInput = styled.textarea`
    border: 1.1px solid #f93c40 !important;
    width: 370px;
    height: 130px;
    padding: 10px;
    display: block;
    font-family: 'SF Compact';
    resize: none;
    transition: 0.2s;

    :focus {
        box-shadow: 0px 0px 15px -3px #9e9e9e;
        outline: none;
    }
`;

const Submit = styled.input`
    margin-top: 20px;
    background: #f93c40;
    border: none;
    color: #fff;
    font-family: 'SF Compact';
    font-weight: 400;
    padding: 14px 35px;
    border-radius: 40px;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.2s;

    :focus {
        box-shadow: 0px 0px 15px -3px #9e9e9e;
        outline: none;
    }
`;

const Contact = () => (
    <StyledSection>
        <Headline>Kontakt</Headline>
        <ContactWrapper  data-sal="fade" data-sal-easing="ease-out-back" data-sal-duration="300">
            <ContactItem><StyledIconifyIcon icon={sharpAlternateEmail} /> kontakt@aleksandergadomski.pl</ContactItem>
            <ContactItem> <StyledIconifyIcon icon={phoneIcon} /> +48 514 144 053</ContactItem>
            <ContactItem><StyledMessengerIcon /> m.me/aleksander-gadomski</ContactItem>
        </ContactWrapper>
        <ContactFormWrapper>
            <h3>Skontaktuj się ze mną</h3>
            <ContactForm>
                <SmallInput type="text" placeholder="Imię lub nazwa firmy" />
                <SmallInput type="text"  placeholder="E-mail" />
                <LargeInput placeholder="Proszę o kontakt"></LargeInput>
                <Submit type="submit" value="Wyślij" />
            </ContactForm>
        </ContactFormWrapper>
    </StyledSection>
);

export default Contact;