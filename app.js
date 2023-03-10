require("dotenv").config()
const express = require("express")
const cors = require("cors")
const {dbConnectMySQL} = require('./config/mysql')
const app = express()

const {sequelize} = require("./config/mysql");

app.use(cors())
app.use(express.json())
//app.use(express.static("storage"))

const port = process.env.PORT || 3000

/**
 * Routes here
 */
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnectMySQL()