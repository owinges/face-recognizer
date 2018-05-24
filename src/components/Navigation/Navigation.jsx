import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';

const Navigation = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <Link to='/login' className='f3 link dim black underline pa3 pointer'>Log Out</Link>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Logo />
                <div style={{ textAlign: 'center' }}>
                    <Link to='/login' className='f3 link dim black underline pa3 pointer'>Log In</Link>
                <Link to='/register' className='f3 link dim black underline pa3 pointer'>Register</Link>
                </div>
            </nav>
        );
    }
}

export default Navigation;