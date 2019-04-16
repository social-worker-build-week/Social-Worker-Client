import React from 'react';
import axios from 'axios';

class AddStudent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [],
            firstName: '',
            lastName:'',
            age: '',
            grade: '',
            status: '',
            contactName: '',
            contactNumber: '',
            birthCertificate: '',
            relation: '',
            email: '',
            insurance: '',
            backgroundInformation: '',
            criticalInformation: ''
        }
    }

    addStudent = e => {
        e.preventDefault();
        axios.post('https://educell.herokuapp.com/api/AddStudent', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age,
            grade: this.state.grade,
            status: this.state.status,
            contactName: this.state.contactName,
            contactNumber: this.state.contactNumber,
            birthCertificate: this.state.birthCertificate,
            relation: this.state.relation,
            email: this.state.email,
            insurance: this.state.insurance,
            backgroundInformation: this.state.backgroundInformation,
            criticalInformation: this.state.criticalInformation
        })
            .then(res => { this.setState({ students: res.data }) })
            .catch(err -> console.log(err))
        this.setState({
            firstName: '',
            lastName: '',
            age: '',
            grade: '',
            status: '',
            contactName: '',
            contactNumber: '',
            birthCertificate: '',
            relation: '',
            email: '',
            insurance: ''
            backgroundInformation: '',
            criticalInformation: ''
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
                        placeholder='First Name'
                        value={this.state.firstName}
                        name='firstName'
                    />
                    <input
                        onchange={this.handleInputChange}
                        placeholder='Last Name'
                        value={this.state.lastName}
                        name='lastName'
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
                        placeholder='School Status'
                        value={this.state.status}
                        name='status'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Do they have a birth certificate?'
                        value={this.state.contactNumber}
                        name='birthCertificate'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Do they have insurance'
                        value={this.state.insurance}
                        name='insurance'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Contact Name'
                        value={this.state.contactName}
                        name='contactName'
                    />
                     <input
                        onChange={this.handleInputChange}
                        placeholder='Relation'
                        value={this.state.relation}
                        name='relation'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Contact Number'
                        value={this.state.contactNumber}
                        name='contactNumber'
                    />
                    <input
                        onchange={this.handleInputChange}
                        placeholder='Contact Email'
                        value={this.state.email}
                        name='email'
                    />
                    
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Background Information'
                        value={this.state.backgroundInformation}
                        name='backgroundInformation'
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder='Critical Information'
                        value={this.state.criticalInformation}
                        name='criticalInformation'
                    />
                    <button type='submit'>Add Student</button>
                </form>
            </div>
        )
    }
}

export default AddStudent;