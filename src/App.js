// Third-party components
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import axios from 'axios';
import Clarifai from 'clarifai';

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

const clarifai = new Clarifai.App({
  apiKey: 'f8a3741b719346d9aacc57eb53cf1882'
});

export default class App extends Component {
  constructor () {
    super();

    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      isLoggedIn: false,
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

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onSubmit = () => {
    this.setState({ imageUrl: this.state.input });

    clarifai.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        if (response) {
          axios.put('http://localhost:4000/image', {
            id: this.state.user.id
          })
          .then(response => {
            console.log(response);
            console.log(response.data);
            this.setState({
              user: {
                id: this.state.user.id,
                name: this.state.user.name,
                email: this.state.user.email,
                entries: response.data,
                joined: this.state.user.joined
              }
            });
          })
          .catch(error => console.log(error))
        }
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  }

  render () {
    const { isLoggedIn, imageUrl, box, user } = this.state;
    
    return (
      <div>
        <Background />
        <Router>
          <Switch>
            <Route exact path='/' render={() => isLoggedIn ? (
              <div>
                <Navigation isLoggedIn={isLoggedIn} />
                <Rank name={user.name} entries={user.entries} />
                <ImageLinkForm inputChange={this.onInputChange} submit={this.onSubmit} />
                <FaceRecognition box={box} imageUrl={imageUrl} />
              </div>
            ) : <Redirect to='/login' />} />
            <Route path='/login' render={() => (
              <div>
                <Navigation isLoggedIn={isLoggedIn} />
                <Login loadUser={this.loadUser} />
              </div>
            )} />
            <Route path='/register' render={() => (
              <div>
                <Navigation isLoggedIn={isLoggedIn} />
                <Register loadUser={this.loadUser} />
              </div>
            )} />
          </Switch>
        </Router>
      </div>
    );
  }
}