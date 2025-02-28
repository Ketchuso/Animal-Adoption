import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

    
    return(
        <header className="header">
            <h1>
                <span className="logo" role="img">
                      🐈  
                </span>
                🐾 Cuddly Cats & Adorable Dogs Adoption 🐾
                <span className="logo" role="img">
                       🐕
                </span>
            </h1>
            <NavLink to='/'>
                <h2>
                    Home
                </h2>
            </NavLink>
            <NavLink to='/newpetform'>
                <h2>
                    AddPet
                </h2>
            </NavLink>
        </header>
    )
}

export default Header