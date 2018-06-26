import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 2rem;
`;

const FormField = styled.div`
    margin-bottom: 3rem;
`;

const FormControl = styled.div`
    font-size: 2rem;
`;

const Input = styled.input`
    background-color: transparent;
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

const SubmitButton = styled.button`
    background-color: transparent;
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
        background-color: #0a0a0a;
        color: white;
    }
`;

const Login = ({ onEmailChange, onPasswordChange, onSubmitLogin }) => {
    return (
        <form>
            <Title>Log In</Title>

            <FormField>
                <FormControl>
                    <Input
                        type="email"
                        id='email'
                        placeholder="Enter your email address"
                        onChange={onEmailChange}
                    />
                </FormControl>
            </FormField>

            <FormField>
                <FormControl>
                    <Input
                        type="password"
                        placeholder="Enter your password"
                        id='password'
                        onChange={onPasswordChange}
                    />
                </FormControl>
            </FormField>

            <SubmitButton onClick={onSubmitLogin}>Login</SubmitButton>
        </form>
    );
}

export default Login;