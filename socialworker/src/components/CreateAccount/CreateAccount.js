import React from 'react';

class CreateAccount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            account: [],
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            organization: ''
        }
    }

    newAccount = e => {
        e.preventDefault();
        axios.post('https://educell.herokuapp.com/api/CreateAccount', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            organization: this.state.organization
        })
            .then(res => {this.setState({ account: res.data }) })
            .catch(err => console.log(err))
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
                password: '',
                confirmPassword: '',
                organization: ''
            })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.newAccount}>
                    <input
                        onchange= {this.handleInputChange}
                        placeholder= 'First Name'
                        value= {this.state.firstName}
                        name='firstName'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Last Name'
                        value= {this.state.lastName}
                        name= 'lastName'
                    />
                    <input
                        onChange= {this.handleInputChange}
                        placeholder= 'Email'
                        value= {this.state.email}
                        name= 'email'
                    />
                    <input
                        onChange= {this.handleInputChange}
                        placeholder= 'Phone Number'
                        value= {this.state.phoneNumber}
                        name= 'phoneNumber'
                    />
                    <input
                        onChange= {this.handleInputChange}
                        placeholder= 'Password'
                        value= {this.state.password}
                        name= 'password'
                    />
                    <input
                        onChange= {this.handleInputChange}
                        placeholder= 'Confirm Password'
                        value= {this.state.confirmPassword}
                        name= 'confirmPassword'
                    />
                    <input
                        onchange= {this.handleInputChange}
                        placeholder= 'What organization are you with?'
                        value= {this.state.organization}
                        name= 'oranization'
                    />
                    <button type='submit'>Get Started</button>
                </form>
            </div>
        )
    }

}

export default CreateAccount;