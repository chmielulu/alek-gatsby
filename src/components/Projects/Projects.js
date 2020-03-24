import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import Gallery from '../Gallery/Gallery';

const StyledSection = styled.section`
    padding: 80px 0 0 0;
`;



const Projects = () => (
    <StyledSection>
        <Headline>Projekty</Headline>
        <Gallery />
    </StyledSection>
);

export default Projects;