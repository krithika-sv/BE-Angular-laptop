require("dotenv").config()

const express = require("express")

const cors = require("cors")

const router = require("./routes")

const laptopserver = express()

require("./config/dbconnection")

laptopserver.use(cors())

laptopserver.use(express.json())

laptopserver.use(router)

laptopserver.use("/uploads", express.static("./uploads"))

const PORT = process.env.PORT

laptopserver.listen(PORT, () => {
    console.log(`Server started running at ${PORT}`)
})

laptopserver.get("/", (req, res) => {
    res.status(200).send(`<h1> The server is waiting</h1>`)
})


