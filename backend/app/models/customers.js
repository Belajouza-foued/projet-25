const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
     
number:{
    type:String,
    required: true,
    unique: true,
    },
  
    email:{
        type:String,
        required: true,
       
        
        
    },
    adress:{
        type:String,
        required: true,
            }
  
   
});
//user models//
const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
