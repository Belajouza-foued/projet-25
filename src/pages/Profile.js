import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../pages/styles/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  {faEnvelope,faPhoneVolume,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Assurez-vous d'importer Link et useNavigate
function Profile() {
    const [userData, setUserData] = useState(null);
   
    const navigate = useNavigate(); // Utiliser useNavigate pour la redirection
        // Fonction pour la déconnexion
        const logOut = () => {
            
            localStorage.removeItem('token'); // Supprimer le token du localStorage
            navigate('/'); // Rediriger vers la page de login
        };
    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');
              // Si aucun token, rediriger vers la page de login
              if (!token) {
                navigate('/profile');
                return;
            }
            try {
               
                const response = await axios.get('http://localhost:5030/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data:', error);
                navigate('/login');
            }
        };
     

        fetchUserData();
    }, [navigate]);

     // Si userData est null après la tentative de récupération, on redirige vers la page de login
     if (!userData) {
        return null; // Retourner null pour éviter d'afficher le profil tant que la redirection n'a pas eu lieu
    }
   

    return (
        //dash profile//
        <div className="container-fluid profile-container">
        <div className="row d-flex flex-lg-row flex-column align-items-center justify-content-center">
          {/* Intégration du tableau de bord */}
          <h1 className="text-center title-profile col-lg-12 mt-5 pt-2">Profile</h1>
          <div className="col-lg-12 col-sm-12 d-flex justify-content-center mb-5">
            <button className="btn btn-danger nav-item nav-log">
              <Link to={"/"} className="nav-link logout-link" onClick={logOut}>LogOut</Link>
            </button>
            <Link to="/userDashboard" className="ms-3 ps-5">
              <button className="btn btn-primary btn-dashboard mt-2 ps-3">Dash</button>
            </Link>
          </div>
          
                  
          <div className="col-lg-6 col-sm-12 ps-lg-3">
            <div className="bg-light rounded p-3 text-center">
              <em className="description d-block mb-3">
                Hello everybody, you must believe<br /> everything is possible, don't give up.
              </em>
              <h5 className="title-form">Name: {userData.name}</h5>
                           <p className="text-form">
                <FontAwesomeIcon icon={faEnvelope} className="icon-profile me-2" />
                {userData.email}
              </p>
              <p className="text-form">
                <FontAwesomeIcon icon={faPhoneVolume} className="icon-profile me-2" />
                {userData.number}
              </p>
                          <p className="text-form">
                <FontAwesomeIcon icon={faLocationDot} className="icon-profile me-2" />
                {userData.adress}
              </p>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default Profile;
