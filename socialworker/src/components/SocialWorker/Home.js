import React from 'react';

const ViewAll = props => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h3>{props.age}</h3>
            <h3>{props.grade}</h3>
        </div>
    )
}

ViewAll.defaultProps = {
    name: '',
    lastVisit: '',
    age: '',
    grade: ''
};

export default ViewAll;