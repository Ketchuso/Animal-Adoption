import React, { useState, useEffect } from "react";
import PetCards from "./PetCards";

function PetContainer() {
    const [pets, setPets] = useState([])

    useEffect(() => {
      fetch("http://localhost:3000/pets")
      .then((resp) => resp.json())
      .then((allPets) => setPets(allPets))
    }, [])

    const petCards = pets.map((pet) =>
        <PetCards
        key={pet.id} 
        name={pet.name} 
        image={pet.image}
        />)


    return(
        <ul className="cards">
            {petCards}
        </ul>
    )
}

export default PetContainer 