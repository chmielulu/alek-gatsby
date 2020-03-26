import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { Icon } from '@iconify/react';
import arrowUpAlt2 from '@iconify/icons-dashicons/arrow-up-alt2';

const StyledAside = styled.aside`
    position: fixed;
    right: 15px;
    bottom: 15px;

    button {
        width: 40px;
        height: 40px;
        background: #e9e9e9;
        display: flex;
        align-items: center;
        justify-content: center;
        border: unset;
        outline: none;
        border-radius: 10px;
        color: #2d2d2d;
        font-size: 20px;
        transition: .3s;
        display: none;
    }

    .visible {
        display: block;
    }
`;

const classNm = (visible) => {
    if(visible) return "visible";
    return null;
}

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState(100);

    useEffect(() => {
        if(window.scrollY >= 500) setVisible(true);

        window.addEventListener("scroll", () => {
            if(window.scrollY >= 500) setVisible(true);
                else setVisible(false); 
        });
    });

    return (
        <StyledAside>
            <button
                onClick={() => scrollTo("body")} 
                className={classNm(visible)} 
            >
                <Icon icon={arrowUpAlt2} />
            </button>
        </StyledAside>
    )
};

export default ScrollToTop;