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

module.exports = router