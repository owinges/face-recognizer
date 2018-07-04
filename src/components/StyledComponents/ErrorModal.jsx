import styled from 'styled-components';

export const ErrorModal = styled.div`
    border-radius: 1rem;
    color: ${props => props.theme.tertiary};
    display: ${props => props.show};
    width: 60vw;
    background-color: rgba(0, 0, 0, 0.8);
    padding-top: 2rem;
    position: absolute;
    right: 50%;
    text-align: center;
    top: 50%;
    transform: translate(50%, -50%);
    z-index: 9999;

    @media only screen and (max-width: 500px) {
        width: 90vw;
    }

    h1 {
        font-size: 4rem;
        margin-bottom: 3rem;
    }

    p {
        font-size: 2rem;
        margin-bottom: 4rem;
    }

    button {
        background-color: ${ props => props.theme.secondary};
        border: 1px solid #0a0a0a;
        box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
        color: #0a0a0a;
        cursor: pointer;
        display: flex;
        float: right;
        font-size: 2.5rem;
        height: 4.2rem;
        padding: .5rem 2rem;
        transform: translate(-1rem, -1rem);

        &:hover {
            background-color: ${ props => props.theme.tertiary};
            color: white;
        }
    }
`;