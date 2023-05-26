const express = require("express");
const router = express.Router();
const db = require("../models");

//Ajouter un nouvel Travaux
router.post("/Travaux", (req, res, next) => {
  db.Travaux.create({
    Contenue: req.body.Contenue,
      CodeEtab: req.body.CodeEtab,
      Matricule: req.body.Matricule,
      DateDesignation: req.body.DateDesignation,
  })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Recuperer un Travaux par son ID
router.get("/Travaux", (req, res, next) => {
  db.Travaux.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Recuperer les Travaux
router.get("/Travaux", (req, res, next) => {
  db.Travaux.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Mettre a jour Travaux identifie par son ID
router.patch("/Travaux/:id", (req, res, next) => {
  db.Travaux.update(
    {
      Contenue: req.body.Contenue,
      CodeEtab: req.body.CodeEtab,
      Matricule: req.body.Matricule,
      DateDesignation: req.body.DateDesignation,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Supprimer/Archiver Travaux identifie par son id
router.delete("/Travaux/:id", (req, res, next) => {
  db.Travaux.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

module.exports = router;
