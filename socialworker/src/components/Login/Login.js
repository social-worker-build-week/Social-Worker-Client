import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            email: '',
            password: ''
        }
    }

    login = e => {
        e.preventDefault();
        axios.post('https://educell.herokuapp.com/api/Login', {
            email: this.state.email,
            password: ''
        })
        .then(res => { this.setState({ members: res.data }) })
        .catch(err => console.log(err))
    this.setState({
        email: '',
        password: ''
    })
    }

    handleInputChange= e => {
        this.setState({ [e.target.name] : e.target.value });
    };

    render() {
            return (
                <div>
                    <form onSubmit={this.signIn}>
                        <input
                            onChange= {this.handleInputChange}
                            placeholder= 'Email'
                            value= {this.state.email}
                            name= 'email'
                        />
                        <input
                            onChange= {this.handleInputChange}
                            placeholder= 'Password'
                            value= {this.state.password}
                            name= 'password'
                        />
                        <button type='submit'>Sign In</button>
                    </form>
                </div>
            )
    }

}

export default Login;