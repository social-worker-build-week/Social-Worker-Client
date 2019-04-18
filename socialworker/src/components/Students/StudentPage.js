import React from 'react';

const StudentPage = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.age}</h2>
            <h2>{props.grade}</h2>
            <h3>{props.status}</h3>
            <h3>{props.contactName}</h3>
            <h3>{props.contactNumber}</h3>
            <h3>{props.birthCertificate}</h3>
            <h3>{props.relation}</h3>
            <h3>{props.email}</h3>
            <h3>{props.insurance}</h3>
            <h1>{props.backgroundInformation}</h1>
            <h1>{props.criticalInformation}</h1>

       </div>
    );
};

StudentPage.defaultProps = {
    name: '',
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
};

export default StudentPage;