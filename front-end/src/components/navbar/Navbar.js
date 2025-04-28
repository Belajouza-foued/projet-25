import React from 'react';
import {  Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
       
        <>
         <div>
  <ul className="d-flex justify-content-between">
            <li>formation</li>
            <li>produit</li>
            <li>materielle</li>
        </ul>
        </div>
        <Outlet/>
        </>
       
        
    )
}
export default Navbar;