import React, { useState, useEffect } from "react";
import PetCards from "./PetCards";
import { useOutletContext } from "react-router-dom";

function Cats() {
    const [petFilter, setPetFilter] = useState('cat')
    const { pets, setPets } = useOutletContext()
    console.log(pets)

    useEffect(() => {
      fetch("http://localhost:5002/pets")
      .then((resp) => resp.json())
      .then((allPets) => setPets(allPets))
      .catch(error => console.error("There was an error fetching in cats:", error))
    }, [setPets])


    const filteredPets = pets.filter((pet) => {
        if (petFilter === 'cat' && pet.type === 'Cat') {
            return true;
        }
    });


    const petCards = filteredPets.map((pet) =>
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
        />
    )


    return(
        <div>
            <ul className="main-container">
                {petCards}
            </ul>
        </div>
    )
}

export default Cats 