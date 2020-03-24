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
        position: relative;
        padding-bottom: 6px;
        overflow: hidden;

        ::before, ::after{
            background: #2d2d2d;
            content: '';
            width: 50%;
            height: 1px;
            position: absolute;
            bottom: 0;
            transition: .3s ease-in-out;
        }

        ::before {
            left: 0;
            transform: translateX(-101%);
        }

        ::after {
            right: 0;
            transform: translateX(101%);
        }

        :hover ::before {
            transform: translateX(0);
        }

        :hover ::after {
            transform: translateX(0);
        }
    }
`;


const Navigation = () => (
    <NavigationWrapper>
        <NavigationList>
            <NavigationListItem>
                <button>Start</button>
            </NavigationListItem>

            <NavigationListItem>
                <button>Projekty</button>
            </NavigationListItem>

            <NavigationListItem>
                <button>O mnie</button>
            </NavigationListItem>

            <NavigationListItem>
                <button>Kontakt</button>
            </NavigationListItem>
        </NavigationList>
    </NavigationWrapper>
);

export default Navigation;