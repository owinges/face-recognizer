import React from 'react';

import { Form, Title, FormField, FormControl, Input, SubmitButton } from '../../StyledComponents/Auth';

const Register = ({ onNameChange, onEmailChange, onPasswordChange, onSubmitRegister }) => {
    return (
        <Form>
            <Title>Register</Title>

            <FormField>
                <FormControl>
                    <Input
                        required
                        type="name"
                        id='name'
                        placeholder="Enter your first name"
                        onChange={onNameChange}
                    />
                </FormControl>
            </FormField>

            <FormField>
                <FormControl>
                    <Input
                        required
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
                        required
                        type="password"
                        placeholder="Enter your password"
                        id='password'
                        onChange={onPasswordChange}
                    />
                </FormControl>
            </FormField>

            <SubmitButton onClick={onSubmitRegister}>Register</SubmitButton>
        </Form>
    );
}

export default Register;