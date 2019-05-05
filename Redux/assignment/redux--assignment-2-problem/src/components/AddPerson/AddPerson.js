import React from 'react';

import './AddPerson.css';

const addPerson = (props) => (
    <div className="AddPerson">
        <input type='text' placeholder="Person Name" onChange={props.onPersonEnter}/>
        <button onClick={props.personAdded}>Add Person</button>
    </div>
);

export default addPerson;