// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var Sequelize = require("sequelize");

// Create instance of Sequelize to use MySQL when connecting to database
const sequelize = new Sequelize("starwars", "root", "", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

// Exporting our connection
module.exports = sequelize;