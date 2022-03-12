const express = require("express")
const app = express()
const dotenv = require("dotenv")
const mongoose = require("./config/connection")
const port = process.env.PORT || 8082
const routs = require("./controller/routs")
app.use("", routs)
app.listen(port, (err) => {
    if (err) throw err
    else {
        console.log(`server running on port ${port}`)
    }
})