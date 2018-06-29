import React from 'react';

import { Form, Title, FormField, FormControl, Input, SubmitButton } from '../../StyledComponents/Auth';

const Login = ({ onEmailChange, onPasswordChange, onSubmitLogin }) => {
    return (
        <Form>
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
        </Form>
    );
}

export default Login;