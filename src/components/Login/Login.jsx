import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Card = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    color: #0a0a0a;
    text-align: center;
    width: 400px;
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1rem;
`;

const FormField = styled.div`
    margin-bottom: .75rem;
`;

const Label = styled.label`
    color: #363636;
    display: block;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: .5rem;
`;

const FormControl = styled.div`
    font-size: 1rem;
`;

const Input = styled.input`
    background-color: transparent;
    border: 1px solid #0a0a0a;
    border-radius: .4rem;
    box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
    color: #0a0a0a;
    font-size: 1rem;
    height: 2.25rem;
    max-width: 100%;
    padding: .5rem;
    width: 100%;
`;

const SubmitButton = styled.button`
    background-color: transparent;
    border: 1px solid #0a0a0a;
    border-radius: .4rem;
    color: #0a0a0a;
    cursor: pointer;
    font-size: 1.5rem;
    height: 3.5rem;
    margin-top: .5rem;
    padding: 0 1.5rem;

    &:hover {
        background-color: #0a0a0a;
        color: white;
    }
`;

const RegisterLink = styled(Link)`
    color: #0a0a0a;
    display: block;
    font-size: 1rem;
    line-height: 1.5rem;
    margin-top: 1rem;
    transition: .15s ease-in;

    &:hover {
        opacity: .5;
    }
`;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loginEmail: '',
            loginPassword: ''
        };
    }

    componentWillMount () {
        this.props.clearUser();
    }

    onEmailChange = (event) => {
        this.setState({ loginEmail: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ loginPassword: event.target.value });
    }

    onSubmitLogin = (event) => {
        event.preventDefault();

        axios.post('https://young-temple-60018.herokuapp.com/login', {
            email: this.state.loginEmail,
            password: this.state.loginPassword
        })
        .then(user => {
            if (user.data.id) {
                this.props.loadUser(user.data);
                this.props.history.push('/');
            }
        })
        .catch(error => console.log(error))
    }

    render () {
        return (
            <Container>
                <Card>
                    <form>
                        <Title>Log In</Title>

                        <FormField>
                            <Label htmlFor='email'>Email</Label>
                            <FormControl>
                                <Input
                                    type="email"
                                    id='email'
                                    placeholder="Enter your email address"
                                    onChange={this.onEmailChange}
                                />
                            </FormControl>
                        </FormField>

                        <FormField>
                            <Label htmlFor='password'>Password</Label>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    id='password'
                                    onChange={this.onPasswordChange}
                                />
                            </FormControl>
                        </FormField>

                        <SubmitButton onClick={this.onSubmitLogin}>Login</SubmitButton>
                        
                        <RegisterLink to='/register'>Register</RegisterLink>
                    </form>
                </Card>
            </Container>
        );
    }
}

export default withRouter(Login);