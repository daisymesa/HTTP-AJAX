import React from 'react';
import './App.css';

import axios from 'axios';
import { Route } from 'react-router-dom';

import FriendsContainer from './components/FriendsContainer';

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

      </div>
    );
  }
}

export default App;