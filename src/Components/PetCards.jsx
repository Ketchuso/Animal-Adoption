import React from "react";


function PetCards({ name, image, type}) {

    
    return(
        <li className="card">
            <img src={image} alt={name} />
            <h4>Hi! My name is: {name}</h4>
            <h5>I'm a :{type}</h5>
        </li>
    )
}

export default PetCards