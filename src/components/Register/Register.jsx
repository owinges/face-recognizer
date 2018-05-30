import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            name: ''
        };
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
        return (
            <section className='section'>
                <div className='container'>
                    <div className='card'>
                        <div className='card-body has-text-centered has-text-black'>
                            <form>
                                <h1 className='is-size-1 has-text-weight-semibold mb2'>Register</h1>

                                <div className="field">
                                    <label className="label" htmlFor='name'>Name</label>
                                    <div className="control has-icons-left">
                                        <input
                                            className="input"
                                            type="name"
                                            id='name'
                                            placeholder="Enter your first name"
                                            onChange={this.onNameChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                </div>

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

                                <button className='button is-large is-black is-outlined mt2' onClick={this.onSubmitRegister}>
                                    Register
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default withRouter(Register);