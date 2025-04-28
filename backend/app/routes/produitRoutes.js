const express = require('express');
const produits = require('../controllers/produitsControllers');  
const router = express.Router();

// Créer un nouvel admin
router.post('/', produits.create);  

// Récupérer tous les admins
router.get('/', produits.findAll);      

// Récupérer un admin spécifique avec son ID
router.get('/:id', produits.findOne);

// Mettre à jour un admin avec son ID
router.put('/:id', produits.update);

// Supprimer un admin avec son ID
router.delete('/:id', produits.delete);

// Supprimer tous les admins
router.delete('/', produits.deleteAll);

module.exports = router;  // Exporter le routeur
