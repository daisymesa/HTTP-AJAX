import React, { Component } from 'react'
import './App.css';

import axios from 'axios';
import { Route } from 'react-router-dom';

import FriendsContainer from './components/FriendsContainer';
import NewFriendForm from './components/NewFriendForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data) 
        this.setState ({ friends: response.data })}
        )
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">

        <Route 
        exact path='/' 
        render={props => <FriendsContainer {...props}
            friends={this.state.friends} />} >
        </Route>
        <Route 
        exact path='/' 
        render={props => <NewFriendForm />} >
        </Route>

      </div>
    );
  }
}

export default App;