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
            <section className='section'>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body has-text-centered has-text-black'>
                            <form>
                                <h1 className='is-size-1 has-text-weight-semibold mb2'>Log In</h1>

                                <div className="field">
                                    <label className="label" htmlFor='email'>Email</label>
                                    <div className="control has-icons-left">
                                        <input
                                            className="input"
                                            type="email"
                                            id='email'
                                            placeholder="Enter your email address"
                                            onChange={this.onEmailChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label" htmlFor='password'>Password</label>
                                    <div className="control has-icons-left">
                                        <input
                                            className="input"
                                            type="password"
                                            placeholder="Enter your password"
                                            id='password'
                                            onChange={this.onPasswordChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-lock"></i>
                                        </span>
                                    </div>
                                </div>

                                <button className='button is-large is-black is-outlined mt2' onClick={this.onSubmitLogin}>
                                    Login
                                </button>
                                
                                
                                <div className="lh-copy mt3">
                                    <Link to='/register' className="f6 link dim black db pointer">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Login);