import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import AdoptionForm from"./AdoptionForm";
// import PetContainer from "./PetContainer";
// import NewPetForm from "./NewPetForm";


function PetPage() {
    const [pets, setPets] = useState([])
    const [selectedPet, setSelectedPet] = useState(null)
    
    
    const context ={
        pets,
        setPets,
        selectedPet,
        setSelectedPet
    }

    return(
        <main>
            <Outlet context={context}/>
            {/* <AdoptionForm selectedPet={selectedPet} setSelectedPet={setSelectedPet}/>  */}
            {/* <PetContainer pets={pets} setPets={setPets}/>
            <NewPetForm pets={pets} setPets={setPets}/> */}
        </main>
    )
}

export default PetPage 