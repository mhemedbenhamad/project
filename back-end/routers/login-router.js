const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/Login", (req, res, next) => {
  const { UserName, MotDePasse } = req.body;
  const user = db.User.findOne({ where: { UserName: UserName } });
  if (!user) res.status(400).json({ error: "utilisateur non trouvé" });
  bcrypt.compare(MotDePasse, user.MotDePasse).then((same) => {
    if (same) {
      let token = jwt.sign(
        { id: user.id, username: user.id, role: "mhemed" },
        privatekey,
        { expiresIn: "24h" }
      );
      res.status(200).json({ token: token });
    } else {
      res.status(400).json({ error: "invalid password" });
    }
  });
});

module.exports = router;

/*
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
*/

/*
const express = require("express");
const router = express.Router();
//token
const jwt = require("jsonwebtoken");
let secretkey = "mhemed";
// creation token
function createtoken(req, res, next) {
  const User = { Username: req.body.Username };
  jwt.sign(User, secretkey, (err, resultat) => {
    if (err) {
      res.json({ error: err });
    } else {
      res.json({ token: resultat });
    }
  });
  next();
}
router.post("/Login", createtoken, (req, res) => {});
module.exports = router;
*/
