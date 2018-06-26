import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Login from './Login/Login';
import Register from './Register/Register';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Card = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: .5rem;
    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );
    color: #0a0a0a;
    margin-top: 10vh;
    overflow: hidden;
    text-align: center;
    width: 500px;
`;

const CardHead = styled.div`
    display: flex;
`;

const Tab = styled.div`
    align-items: center;
    background-color: orange;
    cursor: pointer;
    display: flex;
    font-size: 2rem;
    height: 6rem;
    justify-content: center;
    width: 50%;

    &:hover {
        background-color: darkorange;
    }
`;

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: this.props.match.params.id ? this.props.match.params.id : 'login',
            email: '',
            name: '',
            password: ''
        };
    }

    componentWillMount() {
        this.props.clearUser();
    }

    authChange = (authType) => {
        this.setState({ auth: authType });
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onSubmitLogin = (event) => {
        event.preventDefault();

        axios.post('https://young-temple-60018.herokuapp.com/login', {
            email: this.state.email,
            password: this.state.password
        })
            .then(user => {
                if (user.data.id) {
                    this.props.loadUser(user.data);
                    this.props.history.push('/');
                }
            })
            .catch(error => console.log(error))
    }

    onSubmitRegister = (event) => {
        event.preventDefault();

        axios.post('https://young-temple-60018.herokuapp.com/register', {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
        })
            .then(user => {
                if (user.data.id) {
                    this.props.loadUser(user.data);
                    this.props.history.push('/');
                }
            })
            .catch(error => console.log(error))
    }

    render() {
        const { auth } = this.state;

        return (
            <Container>
                <Card>
                    <CardHead>
                        <Tab onClick={() => { this.authChange('login') }}>LOGIN</Tab>
                        <Tab onClick={() => { this.authChange('register') }}>REGISTER</Tab>
                    </CardHead>
                    {auth === 'login' ? (
                        <Login
                            onEmailChange={this.onEmailChange}
                            onPasswordChange={this.onPasswordChange}
                            onSubmitLogin={this.onSubmitLogin} />
                    ) : (
                        <Register
                            onEmailChange={this.onEmailChange}
                            onNameChange={this.onNameChange}
                            onPasswordChange={this.onPasswordChange}
                            onSubmitRegister={this.onSubmitRegister} />
                    )}
                </Card>
            </Container>
        );
    }
}

export default withRouter(Auth);