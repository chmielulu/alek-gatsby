import React from 'react';
import Headline from '../Headline/Headline';
import styled from 'styled-components';

const StyledSection = styled.section`
    padding: 80px 0 0;
`;

const Contact = () => (
    <StyledSection>
        <Headline>Kontakt</Headline>
    </StyledSection>
);

export default Contact;