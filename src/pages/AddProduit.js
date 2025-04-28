import React, { Component } from "react";
import ProduitDataService from "../services/produit.service";
import {crudRouter} from '../Crud-router'
 class addProduit extends Component{
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);        
        this.onChangeProduit = this.onChangeProduit.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);   
        this.onChangeDescription = this.onChangeDescription.bind(this);     
    this.saveAddProduit = this.saveAddProduit.bind(this);
        this.addProduit = this.addProduit.bind(this);
    
        this.state = {
          id: null,
         name:"",          
          produit:"",
          price:"",
          description:"",
         submitted: false

        };
      }
    
      onChangeName(e) {
        this.setState({
          name: e.target.value
        });
      }
          
      onChangeProduit(e) {
        this.setState({
          produit: e.target.value
        });
      }
      onChangePrice(e) {
        this.setState({
          price: e.target.value
        });
      }
      onChangeDescription(e) {
        this.setState({
          description: e.target.value
        });
      }
   
     
      saveAddProduit() {
        var data = {
          name: this.state.name,   
          produit : this.state.produit,     
          price : this.state.price,  
         description : this.state.description,
         
                 };
    
        ProduitDataService.create(data)
          .then(response => {
            this.setState({
              id: response.data.id,
        
              name:response.data.name,
              produit : response.data.produit,
              price : response.data.price,
              description :response.data.description,
                        
              submitted: true
            });
    
        console.log(response.data);

        // Redirection après succès
        this.props.router.navigate("/produit");
    })
    .catch((e) => {
        console.log(e);
    });
};    
    
      addProduit() {
        this.setState({
            id: null,        
            name:"",            
            produit:"",
            price:"",
            description:"",       
       submitted: false
        });
      }
render() {
  return (
    <div className="submit-form">
      {this.state.submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={this.addProduit}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="nom">nom</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={this.state.name}
              onChange={this.onChangeName}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Produit</label>
            <input
              type="text"
              className="form-control"
              id="produit"
              required
              value={this.state.produit}
              onChange={this.onChangeProduit}
              name="produit"
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={this.state.price}
              onChange={this.onChangePrice}
              name="price"           />     
                    </div>
          <div className="form-group">
            <label htmlFor="description">description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
              name="description"           />     
                    </div>
               
              
          <button onClick={this.saveAddProduit} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
}
export default crudRouter(addProduit);
