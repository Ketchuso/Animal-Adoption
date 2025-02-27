import React from "react";


function PetCards({ id, name, image, activities, ageGroup, temperament, adoptionStatus, viewPetClick}) {

    // function viewPetClick() {

    // }

    return(
        <li className="card" >
            <img src={image} alt={name} />
            <h4>Hi! My name is: {name}</h4>
            <h5>Age Group: {ageGroup}</h5>
            <p>Short Description: {temperament}</p>
            <p>This Pet Enjoys: {activities}</p>
            <p>Adoption Status: {adoptionStatus}</p>
            {/* <button onClick={viewPetClick.id}>🐾View Pet!🐾</button> */}
        </li>
    )
}

export default PetCards