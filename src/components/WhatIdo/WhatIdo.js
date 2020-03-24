import React from 'react';
import styled from 'styled-components';
import Headline from '../Headline/Headline';
import { Icon, InlineIcon } from '@iconify/react';
import printer3d from '@iconify/icons-mdi/printer-3d';
import welcomeLearnMore from '@iconify/icons-dashicons/welcome-learn-more';
import bxsCameraMovie from '@iconify/icons-bx/bxs-camera-movie';
import roundMovieFilter from '@iconify/icons-ic/round-movie-filter';
import chart3d from '@iconify/icons-vaadin/chart-3d';


const StyledSection = styled.section`
    padding: 80px 0 0 0;
`;

const WhatIdo = () => (
    <StyledSection>
        <Headline>Czym się zajmuję?</Headline>
    </StyledSection>
);

export default WhatIdo;