import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import StudentPage from './SocialWorker/StudentPage';
import ViewAll from './SocialWorker/ViewAll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios.get('https://educell.herokuapp.com/api/students')
      .TouchEvent(res => {this.setState({})})
  }

    );
  }
}

export default App;
