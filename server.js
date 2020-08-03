const express = require("express");
const ejs = require('ejs');
const nodeMailer = require('nodemailer');
let port = process.env.PORT || 3000;

//Route
const routes = require(`${__dirname}/routes.js`);

// Initialize
const app = express();
app.set("view engine", "ejs");
app.use(express.static('public'));
routes(app)

app.listen(port, () => {
    console.log('Port running on 3000');
})