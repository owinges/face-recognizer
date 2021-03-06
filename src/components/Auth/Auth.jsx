import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Login from './Login/Login';
import Register from './Register/Register';

import { Container, Card, CardHead, Tab } from '../StyledComponents/Auth';
import { ErrorModal } from '../StyledComponents/ErrorModal';

class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            auth: this.props.match.params.id,
            email: '',
            name: '',
            password: '',
            error: ''
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
            .catch((error) => {
                console.log(error);
                this.displayErrorModal('Incorrect username or password. Please try again.');
            })
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

    displayErrorModal = (errorMessage) => {
        this.setState({ error: errorMessage });
    }

    closeErrorModal = () => {
        this.setState({ error: '' });
    }

    render() {
        const { auth, error } = this.state;

        return (
            <Container>
                <ErrorModal show={error.length > 0 ? 'block' : 'none'}>
                    <h1>ERROR</h1>
                    <p>{error}</p>
                    <button onClick={this.closeErrorModal}>OK</button>
                </ErrorModal>
                <Card>
                    <CardHead>
                        <Tab
                            color={auth === 'login' ? 'active' : ''}
                            onClick={() => { this.authChange('login') }}
                        >LOGIN</Tab>
                        <Tab
                            color={auth === 'register' ? 'active' : ''}
                            onClick={() => { this.authChange('register') }}
                        >REGISTER</Tab>
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