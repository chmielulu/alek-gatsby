import React from 'react';
import styled from 'styled-components';
import { render } from 'react-dom';

const NavigationWrapper = styled.nav`
    position: absolute;
    right: 40px;
    top: 20px;
    width: 300px;
`;

const NavigationList = styled.ul`
    display: flex;
    list-style-type: none;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;

const NavigationListItem = styled.li`

    button {
        border: none;
        background: inherit;
        font-weight: 500;
        outline: none;

        :hover{
            text-decoration: underline;
        }
    }
`;


const Navigation = () => (
    <NavigationWrapper>
        <NavigationList>
            <NavigationListItem>
                <button onClick="">Start</button>
            </NavigationListItem>

            <NavigationListItem>
                <button onClick="">Projekty</button>
            </NavigationListItem>

            <NavigationListItem>
                <button onClick="">O mnie</button>
            </NavigationListItem>

            <NavigationListItem>
                <button onClick="">Kontakt</button>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;