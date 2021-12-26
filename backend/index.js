const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 5001
const cors = require("cors")

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://localhost/boast-app-auth")
const db = mongoose.connection
db.on("error", (e) => console.log(e))
db.once("open", () => console.log("Connecting DB"))

const userRouter = require("./routes/user.route")
app.use("/user", userRouter)

app.listen(port, () => console.log(`Lostening on http://localhost:${port}`))