const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const Travaux = Sequelize.define("Travaux", {
    Contenue: {
      type: DataTypes.STRING,
    },
    CodeEtab: {
      type: DataTypes.STRING,
    },

    Matricule: {
      type: DataTypes.STRING,
    },
    DateDesignation: {
      type: DataTypes.STRING,
    },
  });
  return Travaux;
};
