require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const db = require("./database");
const clientesRoutes = require("./routes/clientesRoutes");
const consultorasRoutes = require("./routes/consultorasRoutes");

app.use(express.json());
app.use(cors());

app.use("/clientes", clientesRoutes);
app.use("/consultoras", consultorasRoutes);

db.connect();

module.exports = app;
