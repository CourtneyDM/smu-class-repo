const Nightmare = require("nightmare");
const nightmare = Nightmare({ show: true });

nightmare.goto("https://www.cnn.com")
    .click("#nav-mobileTV")
    .wait("#top-media-element-1")
    .evaluate(() => {
        return document.querySelector("#top-media-element-1");
    })
    .end()
    .then(() => {
        console.log("Success");
    })
    .catch((error) => {
        console.log(`Failed: ${error}`);
    });