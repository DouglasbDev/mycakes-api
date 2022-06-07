require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");



const routes = require("./routes");
const connectToDatabase = require("./database")

connectToDatabase();

const app = express();
const port = process.env.port || 3333;

app.use(express.json());
app.use(routes);

//routes.get("/cakes", () => cakeController.index);

app.listen(port, () => {
    console.log(`Backend started at http://localhost:${port}`);
})