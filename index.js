const http = require('http');
const express = require('express')
var bodyParser = require('body-parser')

const hostname = '127.0.0.1';
const Sequelize = require("sequelize");
const port = 3001;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// import todo routes
const toDoRoutes = require("./routes/toDoRoute");


app.get("/", (req, res) => {
    return res.json("server is running")
})
app.use("", toDoRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))