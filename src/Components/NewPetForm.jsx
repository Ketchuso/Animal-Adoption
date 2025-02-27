import React from "react";
 

function NewPetForm() {

    
    return(
        <div className="new-pet-form">
        <h2>New Adoptable Pet</h2>
        <form>
          <input type="text" name="name" placeholder="Pet name" />
          <input type="text" name="image" placeholder="Image URL" />
          <input type="text" name="type" placeholder="Place holder Cat/Dog" />
          <input type="text" name="age group" placeholder="Age group" />
          <input type="text" name="temperment" placeholder="temperment" />
          <input type="text" name="activities" placeholder="activities" />
          <button type="submit">Add Pet</button>
        </form>
      </div>
    )
}

export default NewPetForm