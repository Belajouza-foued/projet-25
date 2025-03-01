import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/register';
import Navbar from './components/navbar/Navbar';



 // ✅ Import des traductions

const App = () => {
  

   
  return (
    <>
    
      
     
      <Routes>
        <Route path="/" element={<Navbar/>} />
        
       
        <Route path="register" element={<Register />} />
   
        
       
      </Routes>
     
    </>
  );
};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
