import React from "react";


function PetCards({ id, name, image, activities, ageGroup, temperament, adoptionStatus, viewPetClick, setPets}) {

    // function viewPetClick() {

    // }

    function handleClick(){
        fetch(`http://localhost:5002/pets/${id}`,{
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            },
        })
            .then(resp => {
                if (resp.ok){
                    setPets((prevList) => prevList.filter((pet) => pet.id !== id))
                }else{
                    console.error(`Failed to delete pet. Status: ${resp.status} - ${resp.statusText}`)
                }
            })
            .catch(error => console.error("Error deleting pet:", error))
    }

    return(
        <li className="card" >
            <img src={image} alt={name} />
            <h4>Hi! My name is: {name}</h4>
            <h5>Age Group: {ageGroup}</h5>
            <p>Short Description: {temperament}</p>
            <p>This Pet Enjoys: {activities}</p>
            <p>Adoption Status: {adoptionStatus}</p>
            {/* <button onClick={viewPetClick.id}>🐾View Pet!🐾</button> */}
            <button onClick={handleClick}>Delete Animal</button>
        </li>
    )
}

export default PetCards