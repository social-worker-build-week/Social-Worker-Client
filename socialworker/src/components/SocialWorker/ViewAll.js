import React from 'react';

const ViewAll = props => {
    return (
        <div>
           <h1>{props.name}<h1>
           <h3>{props.age}<h3>
           <h3>{props.grade}<h3>
           <h3>{props.status}<h3>
           <h3>{props.contactName}<h3>
           <h3>{props.contactNumber}<h3>
           <h3>{props.birthCertificate}<h3>
           <h3>{props.relation}<h3>
           <h3>{props.email}<h3>
           <h3>{props.insurance}<h3>
       </div>
    );
};

ViewAll.defaultProps = {
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
};

export default ViewAll;