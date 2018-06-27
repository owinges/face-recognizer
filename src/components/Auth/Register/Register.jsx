import React from 'react';

import { Title, FormField, FormControl, Input, SubmitButton } from '../../StyledComponents/Auth';

const Register = ({ onNameChange, onEmailChange, onPasswordChange, onSubmitRegister }) => {
    return (
        <form>
            <Title>Register</Title>

            <FormField>
                <FormControl>
                    <Input
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

            <SubmitButton onClick={onSubmitRegister}>Register</SubmitButton>
        </form>
    );
}

export default Register;