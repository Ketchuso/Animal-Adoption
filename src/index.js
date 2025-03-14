import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import App from './Components/App';
import PetPage from './Components/PetPage';
import PetContainer from './Components/PetContainer';
import NewPetForm from './Components/NewPetForm';
import Cats from './Components/Cats';
import Dogs from './Components/Dogs';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {path: '', 
        element: <PetPage />,
        children:[
          {index: true, element: <PetContainer />},
          {path: 'newpetform', element: <NewPetForm />},
          {path: 'cats', element: <Cats/>},
          {path: 'dogs', element: <Dogs/>}
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
