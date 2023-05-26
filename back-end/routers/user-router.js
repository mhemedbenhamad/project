const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//Ajouter un nouvel user
router.post("/User", (req, res, next) => {
  db.User.count({ where: { Email: req.body.Email } }).then((doc) => {
    if (doc != 0) {
      res.status(400).json("this mail is used");
    } else {
      bcrypt.hash(req.body.MotDePasse, 10).then((MotDePasse) => {
        db.User.create({
          Username: req.body.Username,
          Email: req.body.Email,
          MotDePasse: MotDePasse,
        })
          .then((response) => res.status(200).send(response))
          .catch((err) => res.status(400).send(err));
      });
    }
  });
});

//Recuperer un user par son ID
router.get("/User/:id", (req, res, next) => {
  db.User.findOne({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Recuperer les users
router.get("/User", (req, res, next) => {
  db.User.findAll()
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Mettre a jour user identifie par son ID
router.patch("/User/:id", (req, res, next) => {
  db.User.update(
    {
      Username: req.body.Username,
      Email: req.body.Email,
      MotDePasse: req.body.MotDePasse,
    },
    { where: { id: req.params.id } }
  )
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});

//Supprimer user identifie par son id
router.delete("/User/:id", (req, res, next) => {
  db.User.destroy({ where: { id: req.params.id } })
    .then((response) => res.status(200).send(response))
    .catch((err) => res.status(400).send(err));
});
const privatekey = "this is private key";
router.post("/Login", (req, res, next) => {
  db.User.findOne({ where: { Email: req.body.Email } }).then((user) => {
    if (!user) {
      res.status(400).json({ msg: "invalid Email" });
    } else {
      bcrypt.compare(req.body.MotDePasse, user.MotDePasse).then((same) => {
        if (same) {
          let token = jwt.sign(
            { id: user.id, username: user.id, role: "mhemed" },
            privatekey,
            { expiresIn: "24h" }
          );
          res.status(200).json({ token: token });
        } else {
          res.status(400).json("invalid password");
        }
      });
    }
  });
});

module.exports = router;
