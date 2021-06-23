const express = require("express");
const cors = require("cors");
const db = require("./config/dbConnection");
const routes = require("./app/controller/router/routes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", routes);

app.listen(3000, () => {
    console.log("API Funcionando!");
})