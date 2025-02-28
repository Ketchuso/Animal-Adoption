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
            <div className="nav">
                <NavLink id="all-pets" to='/'>
                    <h2>
                        All Pets
                    </h2>
                </NavLink>
                <NavLink id="cats" to='/cats'>
                    <h2>
                        Cats
                    </h2>
                </NavLink>
                <NavLink id="dogs" to='/dogs'>
                    <h2>
                        Dogs
                    </h2>
                </NavLink>
                <NavLink id="addpet" to='/newpetform'>
                    <h2>
                        AddPet
                    </h2>
                </NavLink>
            </div>
            
        </header>
    )
}

export default Header