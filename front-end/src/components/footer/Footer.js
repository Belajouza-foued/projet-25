import React from 'react';
import {  Outlet } from 'react-router-dom';

const Footer = () => {
    return (
       
        <>
         <div>
  <ul className="d-flex justify-content-between">
            <li>source</li>
            <li>liens</li>
            <li>email</li>
        </ul>
        </div>
        <Outlet/>
        </>
       
        
    )
}
export default Footer;