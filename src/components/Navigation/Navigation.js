import React, {useState, useEffect} from 'react';
import { HamburgerSpinReverse } from 'react-animated-burgers'
import styled from 'styled-components';
import scrollTo from 'gatsby-plugin-smoothscroll'
import { Link } from 'gatsby'

const NavigationWrapper = styled.nav`
    position: absolute;
    right: 40px;
    top: 20px;
    width: 300px;

    @media (min-width: 2200px) {
        width: 420px;
        top: 40px;
    }
`;



const NormalNavigationList = styled.ul`
    display: flex;
    list-style-type: none;
    width: 100%;
    align-items: center;
    justify-content: space-around;
`;


const MenuNavigationList = styled.ul`
    display: flex;
    position: absolute;
    left: 0;
    top: 0;
    min-width: 300px;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background: #fff;
    z-index: 99;
    flex-direction: column;
    list-style-type: none;
    transform: translateX(-100%);
    transition: 0.3s ease-in-out;

    li {
        font-size: 2rem;
        margin-top: 20px;
    }

    &&.active {
        transform: translateX(0);
    }
`;


const Toggler = styled(HamburgerSpinReverse)`
    position: absolute;
    outline: none;
    right: 10px;
    top: 10px;
    z-index: 99;

    span, span::after, span::before {
        background: #fff!important;
    }
`;



const NavigationListItem = styled.li`
    cursor: pointer;
    
    button {
        border: none;
        background: inherit;
        font-weight: 500;
        outline: none;
        position: relative;
        padding-bottom: 6px;
        overflow: hidden;
        font-size: 0.8rem;

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

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const classNm = (isActive) => {
    if(isActive) return "active";

    return null;
}

const Navigation = () => {
    const [isShowMenu, setShowMenu] = useState(false);
    const [isActiveMenu, setActiveMenu] = useState(false);

    useEffect(() => {
        if(window.innerWidth <= 1000) setShowMenu(true);

        window.addEventListener("resize", () => {
            if(window.innerWidth <= 1000) setShowMenu(true);
                else setShowMenu(false);
        });

        if(isActiveMenu){
            document.querySelector('body').style.overflowY = "hidden";
        } else {
            document.querySelector('body').style.overflowY = "";
        }
    });
    
    const navigationItems = [
        {
            link: true,
            to: "/",
            description: "Start"
        },

        {
            link: false,
            to: "#projects",
            description: "Projekty"
        },

        {
            link: false,
            to: "#aboutMe",
            description: "O mnie"
        },

        {
            link: false,
            to: "#contact",
            description: "Kontakt"
        }
    ];

    return (
        <>
            {!isShowMenu && (
                <NavigationWrapper>
                    <NormalNavigationList>
                    {navigationItems.map(({link, to, description}, index) => {
                        if(link) {
                            return (
                                <NavigationListItem key={`navItem-${index}`}><StyledLink to={to}><button>{description}</button></StyledLink></NavigationListItem>
                            )
                        } else {
                            return (
                                <NavigationListItem key={`navItem-${index}`} onClick={() => scrollTo(to)}><button>{description}</button></NavigationListItem>
                            )
                        }
                    })}
                    </NormalNavigationList>
                </NavigationWrapper>
            ) || (
                <nav>
                    <Toggler isActive={isActiveMenu} onClick={() => {setActiveMenu(!isActiveMenu)}} buttonWidth={30} />

                    <MenuNavigationList className={classNm(isActiveMenu)}>
                        {navigationItems.map(({link, to, description}, index) => {
                            if(link) {
                                return (
                                    <NavigationListItem
                                        key={index} 
                                        onClick={() => setActiveMenu(false)}
                                    >
                                        <StyledLink to={to}>{description}</StyledLink>
                                    </NavigationListItem>
                                )
                            } else {
                                return (
                                    <NavigationListItem 
                                        onClick={() => {
                                            setActiveMenu(false)
                                            scrollTo(to)  
                                        }}
                                    >
                                        {description}
                                    </NavigationListItem>
                                )
                            }
                        })}
                    </MenuNavigationList>
                </nav>
            )}
        </>
    )
};

export default Navigation;