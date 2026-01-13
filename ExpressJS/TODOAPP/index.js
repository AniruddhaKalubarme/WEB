const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const todoRoutes = require("./routes/todos");

app.use("/api/v1", todoRoutes);

app.listen(PORT, ()=>{
    console.log(`The server is started at port ${PORT}`);
})

const dbCnnect = require("./config/database");
dbCnnect();

app.get("/", (req, res) => {
    res.send('<h1> This is the HOMEPAGE body</h1>')
})