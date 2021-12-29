require("dotenv").config()

const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = process.env.PORT
const cors = require("cors")

/*
const path = require('path')
app.use(express.static(path.join(__dirname, '../build')))
*/

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DATABASE_URI)
const db = mongoose.connection
db.on("error", (e) => console.log(e))
db.once("open", () => console.log("Connecting DB"))

const userRouter = require("./routes/user.route")
app.use("/user", userRouter)

/*
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'../build/index.html'))
})
*/

app.listen(port, () => console.log(`Lostening on http://localhost:${port}`))