require('dotenv').config()
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser');

const app = express()
const routes = require("./src/routes")

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(cors("*"))
const port = 4000

app.use("/api", routes);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})