import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar'
import Register from './pages/register'
import Login from './pages/Login';
import Footer from './components/footer/Footer';
import Contact from './pages/Contact'
import Home from './pages/Home';
import { useLocation } from 'react-router-dom';
import Profile from './pages/Profile';
import Produit from './pages/Produit';
import AddProduit from './pages/AddProduit';

export default function App(){
  const location = useLocation();
   
  const hideNavbarFooter = ["/login", "/profile","/addProduit","/produit"].some(path => location.pathname.startsWith(path));
    return(
    <>

{!hideNavbarFooter && <Navbar />}
<Routes>
<Route path ='/' element={<Register/>}/>
<Route path="/login" element={<Login/>} />
<Route path="/home" element={<Home/>} />
<Route path="/contact" element={<Contact/>} />
<Route path="/profile" element={<Profile/>} />
<Route path="/produit" element={<Produit/>} />
<Route path="/addProduit" element={<AddProduit/>} />

   </Routes>
   {!hideNavbarFooter && <Footer />}



</>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

