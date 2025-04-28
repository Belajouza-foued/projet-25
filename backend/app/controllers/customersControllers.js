const jwt = require('jsonwebtoken');
const Customer = require('../models/customers');
const fs = require('fs');
//forgot//
const dotenv = require('dotenv');
dotenv.config();
//forgot//
// JWT Secret Key
const JWT_SECRET = 'your_jwt_secret_key';

// User Registration
exports.register = async (req, res) => {
    const { name, number,email, adress  } = req.body;
   

    try {
        // Hash Password
       
        // Create New User
        const newCustomer = new Customer({
            name: name,
            number: number,
         email: email,
             adress: adress
          
        });

        await newCustomer.save();
        res.status(201).json({ message: 'Customer registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};

// User Login
exports.login = async (req, res) => {
    const { name, number } = req.body;

    try {
        // Check if user exists
        const customer = await Customer.findOne({name,number });
        if (!customer) {
            return res.status(400).json({ error: 'Invalid nom or number' });
        }

       

        // Generate JWT
        const token = jwt.sign({ userId: customer._id }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, userId: customer._id, name: customer.name, number: customer.number});
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};
// Récupérer le profil de l'utilisateur
exports.getProfile = async (req, res) => {
    try {
        console.log('Fetching profile for userId:', req.user.userId); // Log
        const customer = await Customer.findById(req.user.userId).select('-number');
          if (!customer) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(customer);
    } catch (error) {
        console.error('Error fetching user profile:', error); // Log
        res.status(500).json({ error: 'Error fetching user profile' });
    }
};



// Reset Password
