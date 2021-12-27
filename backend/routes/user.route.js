const express = require("express")
const router = express.Router()
const User = require("../models/user.model")
const verify = require("../plugins/verify")

router.post("/verify", (req, res) => {
  const token = req.body.token
  verify(token)
    .then(decodedToken=> {
      res.json({
        ok: true,
        data: decodedToken
      })
    })
    .catch(err => {
      res.json({
        ok: false,
        message: err
      })
    })
})

router.post("/", (req, res) => {
  const {
    email,
    name
  } = req.body

  if(!email || !name) {
    res.status(400).json({
      ok: false,
      message: "user/lack-parmas"
    })
  } else {
    console.log(email, name)
    res.status(200).json({
      ok: true
    })
  }
})

module.exports = router