import React from 'react';
import ReactDom from 'react-dom';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';
import { Route } from 'react-router-dom';

import Friends from './components/Friends';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => this.setstate[{ friends: response.data }])
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">

        <Route exact path='/' render={props =>
          <Friends  {...props}
            friends={this.state.friends} />}
        />
      </div>
    );
  }
}

export default App;