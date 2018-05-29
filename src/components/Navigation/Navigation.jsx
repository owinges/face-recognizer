import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ isLoggedIn }) => {
    return (
        <div class="w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
            <nav className="f6 fw6 ttu tracked tr">
                {isLoggedIn ? (
                    <Link to='/login' className='f3 dim black underline pa3'>Log Out</Link>
                ) : (
                        <div>
                            <Link to='/login' className='f3 dim black underline pa3'>Log In</Link>
                            <Link to='/register' className='f3 dim black underline pa3'>Register</Link>
                        </div>
                    )}
            </nav>
        </div>
    );
}

export default Navigation;