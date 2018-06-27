import React from 'react';

import { Title, FormField, FormControl, Input, SubmitButton } from '../../StyledComponents/Auth';

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