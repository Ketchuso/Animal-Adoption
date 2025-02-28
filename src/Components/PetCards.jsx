import React, { useState } from "react";

function PetCards({ id, name, image, activities, ageGroup, temperament, adoptionStatus, type, setPets, onClick}) {
    const petClass = type === 'Cat' ? 'cat-theme' : type === 'Dog' ? 'dog-theme' : '';

    const [viewPet, setViewPet] = useState(false);

    const toggleViewPet = () => {
        setViewPet(!viewPet)
    }

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
        <div className={`pet-card ${petClass}`} onClick={onClick} >
            <img src={image} alt={name}/>
            <h4>Hi! My name is: {name}</h4>
            {viewPet && (
                <div>
                    <h5>Age Group: {ageGroup}</h5>
                    <p>Short Description: {temperament}</p>
                    <p>This Pet Enjoys: {activities}</p>
                    <p>Adoption Status: {adoptionStatus}</p>
                </div>
            )}
            <button onClick={toggleViewPet}>
                {viewPet ? "🐾Hide Details🐾" : "🐾View Details!🐾"}
            </button>
            <button onClick={handleClick}>Remove Listing 🏡</button>
        </div>
    )
}

export default PetCards