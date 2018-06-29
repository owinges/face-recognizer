import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-content: center;
    justify-content: space-around;
`;

export const Card = styled.div`
    background-color: ${props => props.theme.primary};
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    color: #0a0a0a;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 500px;
    @media only screen and (max-width: 500px) {
        width: 400px;
    }
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

export const Title = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

export const FormField = styled.div`
    margin-bottom: 3rem;
`;

export const FormControl = styled.div`
    font-size: 2rem;
`;

export const Input = styled.input`
    background-color: ${props => props.theme.secondary};
    border: 1px solid #0a0a0a;
    border-radius: .4rem;
    box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
    color: #0a0a0a;
    font-size: 1.75rem;
    height: 4rem;
    max-width: 90%;
    padding: 2rem;
    width: 90%;
`;

export const SubmitButton = styled.button`
    background-color: ${props => props.theme.secondary};
    border: 1px solid #0a0a0a;
    border-radius: .4rem;
    color: #0a0a0a;
    cursor: pointer;
    font-size: 3rem;
    height: 5.5rem;
    max-width: 90%;
    padding: 0 4rem;
    width: 90%;

    &:hover {
        background-color: ${props => props.theme.tertiary};
        color: white;
    }
`;

export const Form = styled.form`
    padding: 3rem;
`;