import React, { useState } from "react";
 

function NewPetForm({ pets, setPets}) {
  const [ newPet, setNewPet ] = useState({
    name: "",
    type: "Dog",
    age_group: "Adult",
    temperament: "",
    activities: "",
    image: "",
    adoption_status: "Adoptable"
  })

  function petChange(event){
    const { name, value } = event.target;
    setNewPet({
      ...newPet,
      [name]: value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    const newPetData = {...newPet}

    fetch("http://localhost:5002/pets", {
      method: "POST",
      body: JSON.stringify(newPetData),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(resp => resp.json())
      .then(data => {
        setPets([...pets, data]);
        setNewPet({
          name: "",
          type: "Dog",
          age_group: "Adult",
          temperament: "",
          activities: "",
          image: "",
          adoption_status: "Adoptable"
        })
      })
  }

    
    return(
        <div className="form">
        <h2>New Adoptable Pet</h2>
        <form>
          <input onChange={petChange} type="text" name="name" placeholder="Insert Pet's Name" />
          <input onChange={petChange} type="text" name="image" placeholder="Add Image URL" />
          <p>
              Animal Type:
              <label><input onChange={petChange} type="radio" name="type" value={"Cat"}/> Cat </label>
              <label><input onChange={petChange} type="radio" name="type" value={"Dog"} defaultChecked={true}/> Dog </label>
          </p>
          <p>
              Age Group:
              <label><input onChange={petChange} type="radio" name="age_group" value={"Young"}/> Young </label>
              <label><input onChange={petChange} type="radio" name="age_group" value={"Adult"} defaultChecked={true}/> Adult </label>
              <label><input onChange={petChange} type="radio" name="age_group" value={"Senior Pet"}/> Senior Pet </label>
          </p>
          <input onChange={petChange} type="text" name="temperament" placeholder="Describe Temperment Type" />
          <input onChange={petChange} type="text" name="activities" placeholder="Activities They Enjoy" />
          <button onClick={handleSubmit} type="submit">Add Pet</button>
        </form>
      </div>
    )
}

export default NewPetForm