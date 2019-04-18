import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            members: [],
            email: '',
            password: '',
            loggedIn: false
        }
    };

    login = e => {
        e.preventDefault();
        const user = {
            username: this.state.username,
            password: this.state.password
        }
        const token = localStorage.getItem('token');
        const requestOptions = {
            headers: {
                authorization: token
            }
        }
        axios.post('https://educell.herokuapp.com/api/Login',
            user,
            requestOptions
        )
        .then(res => {
            if (res.status === 200) {
                localStorage.setItem('token', res.data.token)
                console.log(res.data)
                this.setState({
                    loggedIn: true
                })
            } else {
                throw new Error()
            }
        })
        .catch(err => console.log(err))
        this.props.history.push('/students')
    }

    handleInputChange= e => {
        this.setState({ [e.target.name] : e.target.value });
    };

    render() {
            return (
                <div className='sign-in-form'>
                    <h1 className='welcome-back-to-educ'>Welcome Back!</h1>
                    <form onSubmit={this.signIn}>
                    <h2>Username</h2>
                        <input
                            onChange= {this.handleInputChange}
                            label= 'Email'
                            value= {this.state.email}
                            name= 'email'
                        />
                        <h2>Password</h2>
                        <input
                            onChange= {this.handleInputChange}
                            label= 'Password'
                            value= {this.state.password}
                            name= 'password'
                        />
                        <button type='submit'>Sign In</button>
                        <NavLink to='/register'>
                        <h4>Create an account here!</h4>
                        </NavLink>
                        <h4>Forgot password?</h4>
                        <h5>By logging in, you are agreeing to our terms of service</h5>
                    </form>
                </div>
            )
    }

}

export default Login;