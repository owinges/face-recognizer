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

        axios.post('http://localhost:4000/register', {
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
            <article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-1 mw6 shadow-5 center' style={{ textAlign: 'center' }}>
                <main className="pa4 black-80">
                    <form className="measure">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type='name'
                                    name='name'
                                    id='name'
                                    onChange={this.onNameChange}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
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
                        <div className="">
                            <input
                                onClick={this.onSubmitRegister}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Register"
                            />
                        </div>
                    </form>
                </main>
            </article>
        );
    }
}

export default withRouter(Register);