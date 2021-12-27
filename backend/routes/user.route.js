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

router.post("/", async (req, res) => {
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
    const user = new User({
      email: email,
      name: name
    })

    try {
      const newUser = await user.save()
      res.status(201).json({
        ok: true,
        data: newUser
      })
    } catch (err) {
      res.status(400).json({
        ok: false,
        message: err.message
      })
    }
  }
})

module.exports = router