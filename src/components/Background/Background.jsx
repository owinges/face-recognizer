import React from 'react';

import Particles from 'react-particles-js';

const particlesOptions = {
    particles: {
        number: {
            value: 40,
            density: {
                enable: true,
                value_area: 800
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            }
        }
    },
    line_linked: {
        shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
        }
    }
}

const Background = () => {
    return <Particles params={particlesOptions} className='particles' />;
}

export default Background;