import React from 'react';
import Tilt from 'react-tilt';

import './Logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <div className='navbar-item'>
            <Tilt className='Tilt' options={{ max: 50 }} style={{ height: 40, width: 40 }}>
                <div className='Tilt-inner'>
                    <img src={brain} alt='Brain logo'/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;