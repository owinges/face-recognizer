import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Navigation = ({ isLoggedIn }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Logo />
            </div>
            <div className="navbar-menu">
                <div className="navbar-end">
                    {isLoggedIn ? (
                        <Link to='/login' className='navbar-item'>Log Out</Link>
                    ) : (
                            <React.Fragment>
                                <Link to='/login' className='navbar-item'>Log In</Link>
                                <Link to='/register' className='navbar-item'>Register</Link>
                            </React.Fragment>
                        )}
                </div>
            </div>
        </nav>
    );
}

export default Navigation;