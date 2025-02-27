import React, { useState } from "react";
import PetContainer from "./PetContainer";
import NewPetForm from "./NewPetForm";

function PetPage() {
    const [pets, setPets] = useState([])
    
    return(
        <main>
            <PetContainer pets={pets} setPets={setPets}/>
            <NewPetForm pets={pets} setPets={setPets}/>
        </main>
    )
}

export default PetPage 