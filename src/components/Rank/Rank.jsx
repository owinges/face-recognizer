import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveInBottom = keyframes`
    from {
        opacity: 0;
        transform: translateY(8rem);
    }

    to {
        opacity: 1;
        transform: translate(0); /* Return to normal */
    }
`;

const Message = styled.article`
    animation: ${moveInBottom} .4s ease;
    background-color: ${props => props.theme.primary};
    display: ${props => (props.display === 'invisible' ? 'none' : '')};
    width: 260px;
`;

const MessageHeader = styled.div`
    background-color: ${props => props.theme.secondary};
    display: flex;
    font-size: 1.6rem;
    height: 2rem;
    justify-content: space-between;
    padding-left: 1rem;

    &p {
        width: 50%;
    }

    &button {
        width: 50%;
    }
`;

const MessageBody = styled.div`
    align-items: center;
    display: flex;
    font-size: 1.6rem;
    height: 7rem;
    padding-left: 1rem;

    &p {
        align-items: center;
        display: flex;
    }
`;

const Rank = ({ toggleRank, displayRank, entries }) => {
    return (
        <Message display={displayRank ? '' : 'invisible'}>
            <MessageHeader>
                <p>Entry count increased!</p>
                <button onClick={toggleRank}>X</button>
            </MessageHeader>
            <MessageBody>
                <p>{`Your current entry count is ${entries}!`}</p>
            </MessageBody>
        </Message>
    );
}

export default Rank;