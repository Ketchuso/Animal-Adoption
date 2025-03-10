import React, { useState, useEffect } from "react";
import PetCards from "./PetCards";
import { useOutletContext } from "react-router-dom";

function PetContainer() {
    const { pets, setPets } = useOutletContext()
    console.log(pets)

    useEffect(() => {
      fetch("http://localhost:5002/pets")
      .then((resp) => resp.json())
      .then((allPets) => setPets(allPets))
      .catch(error => console.error("There was an error fetching in petcontainer:", error))
    }, [setPets])

    const petCards = pets.map((pet) =>
        <PetCards
        key={pet.id} 
        id={pet.id}
        name={pet.name} 
        image={pet.image}
        activities={pet.activities}
        ageGroup={pet.age_group}
        temperament={pet.temperament}
        adoptionStatus={pet.adoption_status}
        setPets={setPets}
        type={pet.type}
        />)

    return(
        <div>
            <ul className="main-container">
                {petCards}
            </ul>
        </div>
    )
}

export default PetContainer 