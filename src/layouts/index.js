import React from 'react';
import GlobalStyles from '../assets/styles/globalStyles';

const MainLayout = ({children}) => (
    <>
        <GlobalStyles />
        {children}
    </>
);

export default MainLayout;