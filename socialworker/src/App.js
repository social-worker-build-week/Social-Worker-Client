import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Students from './components/Students/Students';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Route
          path='/'
          component={Navigation}
        />
        <Route
          path='/login'
          component={Login}
        />
        <Route
          path='/Register'
          component={Register}
        />
        <Route
          path='/Students'
          component={Students}
        />
      </div>
    );
  }
  }

export default App;
