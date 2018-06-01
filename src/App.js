// Third-party components
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

// Custom components
import Background from './components/Background/Background';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import Register from './components/Register/Register';

// Other imports
import './App.css';

// Styled components

const Wrapper = styled.main`
  min-height: 100vh;
  max-height: 100%;
`;

const Section = styled.section`
  padding: 3rem 1.5rem;
`;

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      boxes: [],
      isLoggedIn: false,
      displayRank: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    };
  }

  loadUser = (data) => {
    this.setState({
      isLoggedIn: true,
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    });
  }

  clearUser = () => {
    this.setState({
      input: '',
      imageUrl: '',
      boxes: [],
      isLoggedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    });
  }

  calculateFaceLocation = (response) => {
    const clarifaiFaces = response.data.outputs[0].data.regions;
    const image = document.getElementById('inputImage');
    const width = Number(image.clientWidth);
    const height = Number(image.clientHeight);
    console.log(width);
    console.log(height);
    let output = [];

    clarifaiFaces.map(face => {
      return output.push({
        leftCol: face.region_info.bounding_box.left_col * width,
        topRow: face.region_info.bounding_box.top_row * height,
        rightCol: width - (face.region_info.bounding_box.right_col * width),
        bottomRow: height - (face.region_info.bounding_box.bottom_row * height)   
      });
    })

    return output;
  }

  displayFaceBoxes = (boxes) => {
    this.setState({ boxes });
  }

  toggleRank = () => {
    console.log(this.state.displayRank);
    this.setState({
      displayRank: !this.state.displayRank
    });
    console.log(this.state.displayRank);
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    axios.post('https://young-temple-60018.herokuapp.com/imageurl', {
      input: this.state.input
    })
    .then(response => {
      if (response) {
        axios.put('https://young-temple-60018.herokuapp.com/image', {
          id: this.state.user.id
        })
        .then(response => {
          this.setState({
            user: {
              id: this.state.user.id,
              name: this.state.user.name,
              email: this.state.user.email,
              entries: response.data,
              joined: this.state.user.joined
            }
          });
          this.toggleRank();
        })
        .catch(error => console.log(error))
      }
      this.displayFaceBoxes(this.calculateFaceLocation(response));
    })
    .catch(err => console.log(err));
  }

  render () {
    const { isLoggedIn, imageUrl, boxes, user, displayRank } = this.state;
    
    return (
      <Wrapper>
        <Router>
          <React.Fragment>
            {/* <Background /> */}
            <Navigation isLoggedIn={isLoggedIn} />
            <Switch>
              <Route exact path='/' render={() => isLoggedIn ? (
                <Section>
                  <ImageLinkForm inputChange={this.onInputChange} submit={this.onSubmit} />
                  <FaceRecognition boxes={boxes} imageUrl={imageUrl} />
                </Section>
              ) : <Redirect to='/login' />} />
              <Route path='/login' render={() => (
                <Section>
                  <Login clearUser={this.clearUser} loadUser={this.loadUser} />
                </Section>
              )} />
              <Route path='/register' render={() => (
                <Section>
                  <Register loadUser={this.loadUser} />
                </Section>
              )} />
            </Switch>
            <footer className='footer'>
              <Rank toggleRank={this.toggleRank} displayRank={displayRank} entries={user.entries} />
            </footer>
          </React.Fragment>
        </Router>
      </Wrapper>
    );
  }
}