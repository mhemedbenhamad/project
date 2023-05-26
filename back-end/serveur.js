const express = require("express");
const cors = require("cors");
const db = require("./models");
const travauxRoutes = require("./routers/travaux-router");
const loginRoutes = require("./routers/login-router");
const userRoutes = require("./routers/user-router");
const { Sequelize } = require("sequelize");
// creer l'application express
const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-request-Methods", "*");
  res.setHeader("Content-Type", "application/json; charset=UTF-8");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

//Ajouter les  routes
app.use("/", travauxRoutes);
app.use("/", loginRoutes);
app.use("/", userRoutes);

// Demarrer l'ecoute sur le port 8080
db.sequelize.sync().then(() => {
  app.listen(8080, () => console.log("serveur en écoute port 8080"));
});
