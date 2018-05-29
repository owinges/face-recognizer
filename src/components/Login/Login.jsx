import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor (props) {
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
            <main className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center tc'>
                <form className="pa4 black-80">
                    <fieldset id="log-in" className="ba b--transparent ph0 mh0">
                        <legend className="f1 fw6 ph0 mh0">Log In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email">Email</label>
                            <input
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="email"
                                name="email"
                                id="email"
                                onChange={this.onEmailChange}
                            />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                type="password"
                                name="password"
                                id="password"
                                onChange={this.onPasswordChange}
                            />
                        </div>
                    </fieldset>
                    <div>
                        <input
                            onClick={this.onSubmitLogin}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Sign in"
                        />
                    </div>
                    <div className="lh-copy mt3">
                        <Link to='/register' className="f6 link dim black db pointer">Register</Link>
                    </div>
                </form>
            </main>
        );
    }
}

export default withRouter(Login);