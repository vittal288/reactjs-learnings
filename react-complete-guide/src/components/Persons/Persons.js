import React from 'react';
import Person from './Person/Person';


const persons = (props) =>{
    return props.persons.map((person,index) => {
        //here we are returning a Persons list so no need to wrap under DIV
        return (
            <Person 
                click={ () => props.clicked(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changeCustomName={(event)=>props.changed(event, person.id)}
            />
        )
    });
}

export default persons;