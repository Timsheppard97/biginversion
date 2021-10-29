import React, {useState} from 'react'

const Personcard = (props) => {
    // const [state,setState] = useState({
    //     lastName:'lastName',
    //     firstName:'firstName',
    //     age:'age',
    //     hairColor:'hairColor'
    // })
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {props.age} | Hair Color: {props.hairColor}</h3>
        </div>
    )
}

export default Personcard