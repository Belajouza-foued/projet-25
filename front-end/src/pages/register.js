import React, { useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import "../pages/styles/Register.css";
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function Register() {
    const [name, setName] = useState('');
       const [email, setEmail] = useState('');
       const [number, setNumber] = useState('');
       const [adress, setAdress] = useState('');
        
    const navigate = useNavigate();  // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
          name,
          email,
          number,
          adress
      };

        try {
            const response = await axios.post('http://localhost:5030/api/auth/register', userData, {
                headers: {
                     'Content-Type': 'application/json'
                }
            })  
            console.log(response.data);

            // Navigate to profile page on success
            navigate('/login');
            
            // Optionally reload the page
            window.location.reload();
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        <>
<div className='container '>
<div className='row'>
       <div className='col-lg-9 col-sm-12 text-center bg-primary-subtle ps-5 pe-5 pb-5' >
    <div className='col-12'>
             
        <form onSubmit={handleSubmit} className='row position-form mt-2'>
            
        <h2 className='line pt-4'>Register</h2>
            <div className='col-lg-4 col-sm-12'>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-control mt-3'
                />
                  </div>
             
                             
                    <div className='col-lg-8 col-sm-12'>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     className='form-control mt-3'
                />
                </div>
                <div className='col-lg-8 col-sm-12'>
                <input
                    type="number"
                    placeholder="Number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                     className='form-control mt-3'
                />
                </div>
                <div className='col-lg-8 col-sm-12'>
                <input
                    type="text"
                    placeholder="Adress"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                     className='form-control mt-3'
                />
                </div>
   
    
    <div className='col-lg-12 col-sm-12 text-center push-register pt-4 mt-2'>
    <button type="submit" className=' btn btn-primary push'>Register</button>
    </div>
    </form>
    </div>

    </div>
</div>

  </div>
       

        
        </>
       



    );
}


export default Register;