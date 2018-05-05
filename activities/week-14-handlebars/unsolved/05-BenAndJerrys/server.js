const express = require("express");
const handlebars = require("express-handlebars");
const PORT = process.env.PORT || 8080;

const app = express();

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const icecreams = [
    { name: "vanilla", price: 10, awesomeness: 3 },
    { name: "chocolate", price: 4, awesomeness: 8 },
    { name: "banana", price: 1, awesomeness: 1 },
    { name: "greentea", price: 5, awesomeness: 7 },
    { name: "jawbreakers", price: 6, awesomeness: 2 }
];

app.get("/icecreams/:name", (req, res) => {
    for (let i = 0; i < icecreams.length; i++) {
        if (icecreams[i].name === req.params.name) {
            return res.render("ice-cream", icecreams[i]);
        }
    }
    return res.send("Sorry, your flavor is not worthy.");
});

app.get("/icecreams", (req, res) => {
    res.render("icecreams", {
        icecream: icecreams
    });
});

app.listen(PORT, (err) => {
    if (err) { throw err; }
    console.log(`Server started on PORT ${PORT}`);
});