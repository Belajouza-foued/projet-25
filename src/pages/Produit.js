import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import image from'../images/tendeuse.jpg';
import '../pages/styles/Produit.css'
import { Component } from 'react';

import ProduitDataService from '../services/produit.service';

export default class ListProduit extends Component{
  constructor (props) {
    super (props);
    //input search admin
    this.onchangeSearchName = this.onchangeSearchName.bind(this);
    //get all admins
    this.getProduits = this.getProduits.bind(this);
    //activ admin
    this.setActiveProduit = this.setActiveProduit.bind(this);
    //actualiser la page   
    this.refreshListProduit = this.refreshListProduit.bind(this);
    //afficher list adminpar nom
    this.searchByName = this.searchByName.bind(this);
    this.deleteAllProduit = this.deleteAllProduit.bind(this);
    this.deleteProduit = this.deleteProduit.bind(this);



this.state = {
  produits: [],
  searchName: "",
  produitCourant: null,
  index: -1
};

  }
componentDidMount(){
    this.getProduits();
}
  onchangeSearchName(e) {
    const searchName =e.target.value;
    this.setState({
      searchName:searchName,
    });    
  }
getProduits () {
 ProduitDataService.getAll ()
  .then(response =>{this.setState({
    produits :response.data,
  });
console.log (response.data);

})
.catch(err => {
  console.log (err);
})

}
refreshListProduit() {
  this.getProduits ();
  this.setState ({
    produitCourant: null,
    index: -1
  })
}
setActiveProduit(produit , index) {  
  this.setState({
    produitCourant : produit,
  index : index
});
}
searchByName(){
    ProduitDataService.findByTitle(this.state.searchName)
    .then(response => {
        this.setState({
          produits: response.data

        }); 
        console.log(response.data)
    })
    .catch(err=>{
        console.log(err);
    });
}
deleteAllProduit(){
  ProduitDataService.deleteAll()
  .then(response => {
    console.log(response.data);
    this.refreshListProduit();
  })
  .catch(e => {
    console.log(e)
  });
}
deleteProduit(id) {
  if (window.confirm("Êtes-vous sûr de vouloir supprimer cet produit ?")) {
    ProduitDataService.delete(id)
      .then(response => {
        console.log(response.data);
        this.refreshListProduit();
        alert('produit supprimé avec succès');
      })
      .catch(e => {
        console.log(e);
        alert('Erreur lors de la suppression');
      });
  }
}
handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5030/api/produits/${id}`);
    // Mettez à jour l'état local
    this.setState({
      produits: this.state.produits.filter(produit=> produit._id !== id)
    });
    alert('Admin supprimé avec succès');
  } catch (error) {
    console.error('Erreur lors de la suppression:', error);
    alert('Erreur lors de la suppression')
  }
};

render () {
  const {searchName , produits,produitCourant, indexCourant }= this.state; 
  return ( 
    <>
   
 <div className="container-fluid">
   <div className="row">
    <div className="col-12 icon-nav">
    <nav className="navbar navbar-expand-lg offer-nav">
  <div className="container-fluid dashboard">
   
   
    <div className="collapse navbar-collapse" >
            </div>
       <div className="input-group2 d-flex justify-content-center align-items-center">
        <input  className="form-control pe-5 me-2" type="search" placeholder="Search" aria-label="Search" value={searchName} onChange={this.onchangeSearchName}/>
        <button className="btn btn-dark" type="submit" onClick={this.searchByName} >Search</button>
      </div>
    </div>
 </nav>
    </div>
    <div className="col-12 text-center pt-5">
   
    < Link to={'/addProduit'}className='btn btn-dark btn-offer'>Add new Offer</Link>
    < button className='btn btn-danger btn-offer ms-5' onClick={this.deleteAllProduit}>Delete all offer</button>
    </div>
    <h1 className="title-client text-center pt-5">Formation Offer</h1>
     <div className="col-12 d-flex justify-content-center align-items-center mx-auto">
 <div className='d-flex justify-content-center align-items-center mx-auto'>   
       <table className="table bg-white ms-3 table-client pt-5 mt-5 text-center mx-auto align-items-center">
<thead className="bg-light custom-head">
 <tr>
   <th className="px-5 py-1">photo</th>
   <th className="px-5 py-1">id</th>
   <th className="px-5 py-1">Name</th>
   <th className="px-5 py-1">Price</th>
   <th className="marketing-head px-5 py-1">Produit</th>
   <th className="contabilty-head px-5 py-1">Description</th>
  
 
 </tr>
</thead>
<tbody className=''>
  {produits && produits.map((
    produit, index)=>(    // eslint-disable-next-line no-unused-vars

 <tr className={+(indexCourant === produitCourant ? "active": "")} onClick={() => this.setActiveProduit(produit, index)} key={index}>  
   <td>
     <div className=" d-flex text-center align-items-center form-client">
       <img
           src={image}
           alt=""         
                     className="rounded-offer ms-5"
           />
       
     </div>
        </td>
        <td className='pt-3'>
    <span className=''>{produit._id}</span>
    </td> 
   <td>
    <p className='pt-2'>{produit.name}</p>
    </td>  
    
    <td>
    <p className='pt-2'>{produit.produit}</p>
    </td> 
    <td>
    <p className="pt-2">{produit.price}</p>
    </td>   
    <td>
    <p className="pt-2">{produit.description}</p>
    </td>  
 <td>
     <Link to={"/produit/"+ produit._id} type="button" className="btn btn-warning btn-client text-center px-5 no-border">
       Edit
     </Link>
   </td>
   <td>
   <button  className='btn btn-danger btn-client px-5 no-border'  onClick={() => this.deleteProduit(produit._id)}>
  Delete
</button>
   </td>
 </tr>
 ))}

</tbody>
</table>
</div>
     </div>
   </div>
 </div>
</>)
}
  
}
    
  


