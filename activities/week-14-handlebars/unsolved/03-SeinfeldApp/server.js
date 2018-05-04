/* My Solution - Using MySQL and Express */

// Dependencies
const express = require("express");
const mysql = require("mysql");

// Define PORT to be used for application
const PORT = process.env.PORT || 8080;

// Initialize Express
const app = express();

// Create connection to MySQL server
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "seinfeld_db"
});

// Connect to MySQL server
connection.connect(err => {
    if (err) { throw err; };
    return;
});
// Route to handle GET request for cast members
app.get("/cast", (req, res) => {
    connection.query("SELECT * FROM actors", (err, result) => {
        if (err) { throw err; }
        // Create the webpage title using the H1 tag
        var html = "<h1>Seinfield Cast Members</h1>";
        html += "<ul>";

        // Loop through the results returned from the SQL query
        for (let i = 0; i < result.length; i++) {
            html += `<li><p>ID: ${result[i].id}</p>`;
            html += `<p>Character Name: ${result[i].char_name}</p>`;
            html += `<p>Coolness Points: ${result[i].coolness_points}</p>`;
            html += `<p>Attitude: ${result[i].attitude}</p></li>`;
        }
        html += "</ul>";

        // Send the HTML created above as a Response to the GET Request
        res.send(html);
    });
});
// Route to handle GET request for coolness points
app.get("/coolness-chart", (req, res) => {
    connection.query("SELECT * FROM actors ORDER BY coolness_points DESC", (err, result) => {
        if (err) { throw err; }
        // Create the webpage title using the H1 tag
        var html = "<h1>Coolness Chart</h1>";
        html += "<ul>";

        // Loop through the results returned from the SQL query
        for (let i = 0; i < result.length; i++) {
            html += `<li><p>ID: ${result[i].id}</p>`;
            html += `<p>Character Name: ${result[i].char_name}</p>`;
            html += `<p>Coolness Points: ${result[i].coolness_points}</p>`;
            html += `<p>Attitude: ${result[i].attitude}</p></li>`;
        }
        html += "</ul>";

        // Send the HTML created above as a Response to the GET Request
        res.send(html);
    });
});
// Route to handle GET request for attitudes
app.get("/attitude-chart/:att", (req, res) => {
    connection.query("SELECT * FROM actors WHERE attitude = ?", [req.params.att], (err, result) => {
        if (err) { throw err; }
        // Create the webpage title using the H1 tag
        var html = "<h1>Attitude Chart</h1>";
        html += "<ul>";

        // Loop through the results returned from the SQL query
        for (let i = 0; i < result.length; i++) {
            html += `<li><p>ID: ${result[i].id}</p>`;
            html += `<p>Character Name: ${result[i].char_name}</p>`;
            html += `<p>Coolness Points: ${result[i].coolness_points}</p>`;
            html += `<p>Attitude: ${result[i].attitude}</p></li>`;
        }
        html += "</ul>";

        // Send the HTML created above as a Response to the GET Request
        res.send(html);
    });
});
// Initialize the Express server to listen on defined PORT
app.listen(PORT, (err) => {
    if (err) { console.log(`error connecting: ${err.stack}`) };
    console.log(`Express server started...connection id: ${connection.threadId}`);
});