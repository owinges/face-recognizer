// import React from 'react';
import styled from 'styled-components';

// Auth Components

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const Card = styled.div`
    background-color: ${props => props.theme.primary};
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    color: #0a0a0a;
    margin-top: 10vh;
    overflow: hidden;
    text-align: center;
    width: 500px;
`;

export const CardHead = styled.div`
    display: flex;
`;

export const Tab = styled.div`
    align-items: center;
    background-color: ${props => (props.color === 'active' ? props.theme.primary : props.theme.secondary)};
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    height: 6rem;
    justify-content: center;
    width: 50%;
`;