import React from 'react';
import Headline from '../Headline/Headline';
import styled from 'styled-components';
import { Icon } from '@iconify/react';
import sharpAlternateEmail from '@iconify/icons-ic/sharp-alternate-email';
import phoneIcon from '@iconify/icons-jam/phone';
import { FaFacebookMessenger } from 'react-icons/fa';
import {graphql, useStaticQuery} from 'gatsby';

const StyledSection = styled.section`
    padding: 80px 0;
    position: relative;

    @media (max-width: 1000px) {
        padding: 80px 0 0;
    }
    
`;

const ContactWrapper = styled.div`
    margin: 200px 0 100px 10%;

    @media (min-width: 2200px) {
        margin: 400px 0 200px 10%;
    }

    @media (max-width: 1000px) {
        margin: 100px auto -150px auto;
        width: 320px;
    }

    @media (max-width: 350px) {
        width: 280px;
    }
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
    transform: translate(0, 50%);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.41);
    padding-top: 50px;
    padding-left: 40px;

    h3 {
        font-size: 1.625rem;
        text-transform: uppercase;

        @media (max-width: 1250px) {
            font-size: 1.45rem;
        }
    }

    @media (min-width: 2200px) {
        width: 550px;
        height: 600px;
    }

    @media (max-width: 1250px) {
        width: 350px;
        height: 400px;
    }

    @media (max-width: 1000px) {
        position: static;
        margin: auto;
    }


    @media (max-width: 500px) {
        width: 300px;
        height: 350px;
    }

    @media (max-width: 340px) {
        width: 260px;
        height: 310px;
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
    font-size: 0.8rem;

    :focus {
        box-shadow: 0px 0px 15px -3px #9e9e9e;
        outline: none;
    }

    @media (min-width: 2200px) {
        width: 400px;
        height: 30px;
    }

    @media (max-width: 1250px) {
        width: 220px;
        height: 15px;
    }

    @media (max-width: 500px) {
        width: 180px;
        height: 10px;
    }

    @media (max-width: 340px) {
        width: 150px;
        margin-bottom: 10px;
    }
`;

const ContactForm = styled.form`
    margin-top: 40px;

    @media (max-width: 1250px) {
        margin-top: 30px;
    }
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
    font-size: 0.8rem;

    :focus {
        box-shadow: 0px 0px 15px -3px #9e9e9e;
        outline: none;
    }

    @media (min-width: 2200px) {
        width: 450px;
        height: 200px;
    }

    @media (max-width: 1250px) {
        width: 290px;
        height: 90px;
    }

    @media (max-width: 500px) {
        width: 230px;
        height: 70px;
    }

    @media (max-width: 340px) {
        width: 190px;
        height: 50px;
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

    @media (max-width: 340px) {
        font-size: 0.8rem;
        padding: 7px 15px;
        margin-top: 10px;
    }
`;

const Contact = () => {
    const data = useStaticQuery(contactQuery);

    const email = data.datoCmsEMail.link;
    const phone = data.datoCmsPhone.number;
    const messenger = data.datoCmsMessenger.link;

    return (
        <StyledSection id="contact">
            <Headline>Kontakt</Headline>
            <ContactWrapper data-sal="fade" data-sal-easing="ease-out-back" data-sal-duration="300">
                <ContactItem><StyledIconifyIcon icon={sharpAlternateEmail} /> {email}</ContactItem>
                <ContactItem> <StyledIconifyIcon icon={phoneIcon} /> {phone}</ContactItem>
                <ContactItem><StyledMessengerIcon /> {messenger}</ContactItem>
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
    )
};

const contactQuery = graphql`
{
    datoCmsEMail {
        link
      }
      datoCmsPhone {
        number
      }
      datoCmsMessenger {
        link
      }
}
`;

export default Contact;