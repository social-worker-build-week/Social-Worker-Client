import React from 'react';
import axios from 'axios';

class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state: {
            students: [],
            name: '',
            age: '',
            grade: '',
            status: '',
            contactName: '',
            contactNumber: '',
            birthCertificate: '',
            relation: '',
            email: '',
            insurance: ''
        }
    }

    addStudent = e => {
        e.preventDefault();
        axios.post('https://educell.herokuapp.com/api/students', {
            name: this.state.name,
            age: this.state.age,
            grade: this.state.grade,
            status: this.state.status,
            contactName: this.state.contactName,
            contactNumber: this.state.contactNumber,
            birthCertificate: this.state.birthCertificate,
            relation: this.state.relation,
            email: this.state.email,
            insurance: this.state.insurance
        })
            .then(res => { this.setState({ students: res.data }) })
            .catch(err -> console.log(err))
        this.setState({
            name: '',
            age: '',
            grade: '',
            status: '',
            contactName: '',
            contactNumber: '',
            birthCertificate: '',
            relation: '',
            email: '',
            insurance: ''
        })
    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.newStudent}>
                    <input
                        onchange={this.handleInputChange}
                        placeholder='New Student'
                        value={this.state.name}
                        name='name'
                    />
                    <input
                        onchange={this.handleInputChange}
                        placeholder='Age'
                        value={this.state.age}
                        name='age'
                    />
                    <input
                        onchange={this.handleInputChange}
                        placeholder='Grade'
                        value={this.state.grade}
                        name='grade'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Status'
                        value={this.state.status}
                        name='status'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Contact Name'
                        value={this.state.contactName}
                        name='contactName'
                    />
                    <input
                        onChange={handleInputChange}
                        placeholder='Contact Number'
                        value={this.state.contactNumber}
                        name='birthCertificate'
                    />
                    <input
                        onChange={handleInputChange}
                        placeholder='Relation'
                        value={this.state.relation}
                        name='relation'
                    />
                    <input
                        onchange={handleInputChange}
                        placeholder='Email'
                        value={this.state.email}
                        name='email'
                    />
                    <input
                        onChange={handleInputChange}
                        placeholder='Insurance'
                        value={this.state.insurance}
                        name='insurance'
                    />
                    <button type='submit'>Add Student</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;