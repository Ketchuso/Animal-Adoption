import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import PetContainer from "./PetContainer";
// import NewPetForm from "./NewPetForm";


function PetPage() {
    const [pets, setPets] = useState([])
    
    const context ={
        pets,
        setPets
    }

    return(
        <main>
            <Outlet context={context}/>
            {/* <PetContainer pets={pets} setPets={setPets}/>
            <NewPetForm pets={pets} setPets={setPets}/> */}
        </main>
    )
}

export default PetPage 