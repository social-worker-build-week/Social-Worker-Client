import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import { Route, Link } from 'react-router-dom';
// import StudentPage from './SocialWorker/StudentPage';
// import ViewAll from './SocialWorker/ViewAll';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }
 
  componentDidMount() {
    axios.get('https://educell.herokuapp.com/api/students')
      .then(res => {this.setState({ students: res.data }) })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {/* <Route to='' */}
      </div>
    )
  }
  }


export default App;
