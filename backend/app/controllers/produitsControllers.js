const Produit = require("../models/produits");

// Ajouter un admin
exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(400).send({ message: "Le champ name est requis." });
  }

  const produit = new Produit({
    name: req.body.name,
    produit: req.body.produit,
    price: req.body.price,
    description: req.body.description,
  });

  produit
    .save()
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la création de l'produit.",
      })
    );
};

// Trouver tous les admins
exports.findAll = (req, res) => {
  const name = req.query.name;
  const condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  
  Produit.find(condition)
    .then(data => res.send(data))
    .catch(err =>
      res.status(500).send({
        message: err.message || "Erreur lors de la récupération des clients.",
      })
    );
};

// Trouver un admin par ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Produit.findById(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: "Admin non trouvé avec id=" + id });
      }
      res.send(data);
    })
    .catch(err =>
      res.status(500).send({
        message: "Erreur lors de la récupération de l'admin avec id=" + id,
      })
    );
};

// Supprimer un admin par ID
exports.delete = (req, res) => {
  const id = req.params.id;

  Produit.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        return res.status(404).send({ message: `Impossible de supprimer l'produit avec id=${id}.` });
      }
      res.send({ message: "produit supprimé avec succès !" });
    })
    .catch(err =>
      res.status(500).send({
        message: "Erreur lors de la suppression de l'admin avec id=" + id,
      })
    );
};

// Supprimer tous les admins
exports.deleteAll = (req, res) => {
  Produit.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} admins supprimés avec succès.`,
      });
    })
    .catch(err =>
      res.status(500).send({
        message: err.message || "Erreur lors de la suppression des admins.",
      })
    );
};

// Mettre à jour un admin par ID
exports.update = (req,res) => {
  if(!req.body) {
   return res.status(400).send({
     message:"data can not be empty"
   });
  }  
 const id = req.params.id;
 Produit.findByIdAndUpdate(id, req.body, {produitFindAndUpdate:false})
 
 .then(data =>{
   if(!data) {
     res.status(400).send ({
       message:`can not update with id=${id}`
     });
   }
   else res.send ({
     message:"client id updated"
   })
 })
 .catch(err => {
   res.status(500).send({
     message:"error updating client with id=" + id
   });
 });
 
 }