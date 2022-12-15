require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const indexRouter = require("./routes/indexRoutes")

const db = require("./database/mongoConfig");
const clientesRoutes = require("./routes/clientesRoutes");
const consultorasRoutes = require("./routes/consultorasRoutes");

app.use(express.json());
app.use(cors());
db.connect();

app.use(indexRouter)

app.use("/clientes", clientesRoutes);
app.use("/consultoras", consultorasRoutes);



module.exports = app;
