import '../App.css';
import '../index.css'; 


import React from 'react';
import Header from './Header';
import PetPage from './PetPage';


function App() {
  
  return (
    <div className="App">
      <Header />
      <PetPage />
    </div>
  );
}

export default App;
