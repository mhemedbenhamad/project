const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    Username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    MotDePasse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return User;
};
