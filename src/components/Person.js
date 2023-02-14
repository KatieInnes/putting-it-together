import React, { useState } from "react";

const Person = (props) => {
    const [ birthday, setBirthday ] = useState(props.age);

    return (
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: {birthday} </p>
            <p>Hair color: { props.hair } </p>
            <button onClick = { (event) => setBirthday(birthday + 1)}>Birthday button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default Person;