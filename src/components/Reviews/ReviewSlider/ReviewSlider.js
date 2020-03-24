import React from 'react';
import styled from 'styled-components';

const DotsWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);

`; 

const Dot = styled.span`
    display: block;
    background: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    cursor: pointer;

    &.active ::before {
        width: 10px;
        height: 10px;
        content: '';
        background: #2c2c2c;
        left: 50%;
        top: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
`;


const ReviewSlider = ({quantity, children}) => {

    const Dots = [];
    let i;

    for(i = 1; i<=quantity; i++) {
        Dots.push(
        <Dot className={i === 1 ? `active` : null}/>
        );
    }

    return (
        <div>
            {children}

            <DotsWrapper>
                {Dots}
            </DotsWrapper>
        </div>
    )
}

export default ReviewSlider