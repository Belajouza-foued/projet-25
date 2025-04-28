const express = require('express');
const { register, login, getProfile, } = require('../controllers/customersControllers');
const authMiddleware = require('../middleware/authMiddleware'); 
const fs = require('fs');// Import du middleware d'authentification
// Créer le dossier 'uploads' s'il n'existe pas
// Multer Configuration for File Uploads

const router = express.Router();

// Route pour l'enregistrement avec l'upload de l'image de profil
router.post('/register', register);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);

// Route de connexion


// Pour servir les fichiers téléchargés depuis le dossier 'uploads' (facultatif, pour accéder aux images)


module.exports = router;
