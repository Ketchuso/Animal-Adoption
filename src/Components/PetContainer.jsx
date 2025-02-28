import React, { useState, useEffect } from "react";
import PetCards from "./PetCards";

function PetContainer({ pets, setPets }) {
    const [petFilter, setPetFilter] = useState('all')

    useEffect(() => {
      fetch("http://localhost:5002/pets")
      .then((resp) => resp.json())
      .then((allPets) => setPets(allPets))
    }, [setPets])


    const filteredPets = pets.filter((pet) => {
        if (petFilter === 'all') {
            return true;
        }
        if (petFilter === 'cat' && pet.type === 'Cat') {
            return true;
        }
        if (petFilter === 'dog' && pet.type === 'Dog') {
            return true;
        } return false;
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
        />)

        const handleFilterChange = (e) => {
            setPetFilter(e.target.value)
        }


    return(
        <div>
            <div>
                <button value='all' className='all-theme' onClick={handleFilterChange}> 🐾 View All Pets 🐾 </button>
                <button value='cat' className='cat-theme' onClick={handleFilterChange}> 🐈 View All Cats 🐈 </button>
                <button value='dog' className='dog-theme' onClick={handleFilterChange}> 🐕 View All Dogs 🐕 </button>
            </div>

            <ul className="main-container">
                {petCards}
            </ul>
        </div>
    )
}

export default PetContainer 