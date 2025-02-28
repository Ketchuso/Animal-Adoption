import '../App.css';
import '../index.css'; 

import { Outlet } from 'react-router-dom';
import React from 'react';
import Header from './Header';
// import PetPage from './PetPage';
import Footer from './Footer';


function App() {
  
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
