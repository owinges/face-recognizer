// Third-party components
import React, { Component } from 'react';
import Particles from 'react-particles-js';

// Custom components
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';

// Other imports
import './App.css';

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

export default class App extends Component {
  render() {
    return (
      <div>
        <Particles params={particlesOptions} className='particles'/>
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}