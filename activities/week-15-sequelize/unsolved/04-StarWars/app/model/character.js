// Dependencies
const Sequelize = require("sequelize");
const sequelize = require("../config/connection");

// Create a Sequelize table called "allcharacters"
const Character = sequelize.define("character", {
    // id: Sequelize.INTEGER,
    routeName: Sequelize.STRING,
    role: Sequelize.STRING,
    name: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
});

Character.sync();

module.exports = Character;