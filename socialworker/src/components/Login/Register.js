import React from 'react';
import axios from 'axios';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            contactInfo: '',
            password: '',
            organization: '',
      };
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    registerNewUser = e => {
        e.preventDefault();
        const {
            name,
            username,
            contactInfo,
            password,
            organization
        } = this.state;
        let newUser = {
            name,
            username,
            contactInfo,
            password,
            organization
        };
        axios
            .post('https://educell.herokuapp.com/api/register',
            newUser,
            { headers: {
               Authorization: localStorage.getItem('token')
            }}
        )
        .then(res => {
            if (res.status === 201) {
                console.log(res.data)
            } else {
                throw new Error()
            }
        })
        .catch(err => console.log(err))
    this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <h1>Create an Educell Account</h1>
                <form onSubmit={this.registerNewUser}>
                <input
                    onChange={this.handleChange}
                    name='name'
                    type='text'
                    value={this.state.name}
                    required
                />
                <input
                    onChange={this.handleChange}
                    name='username'
                    type='text'
                    value={this.state.username}
                    required
                />
                <input
                    onChange={this.handleChange}
                    name='contactInfo'
                    type='text'
                    value={this.state.contactInfo}
                    required
                />
                <input
                    onChange={this.handleChange}
                    name='password'
                    type='text'
                    value={this.state.password}
                    required
                />
                <button type='submit'>Register</button>
                </form>
                </div>               
        )
    }
 
}

export default Register;