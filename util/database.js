const Sequelize = require("sequelize");

const sequilize = new Sequelize("node_eshop", "root", "nilton", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequilize;
