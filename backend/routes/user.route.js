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
    name,
    uid,
    introduction
  } = req.body

  if(!email || !name || !uid || !introduction) {
    res.status(400).json({
      ok: false,
      message: "user/lack-parmas"
    })
  } else {
    const user = new User({
      email: email,
      name: name,
      uid, uid,
      introduction: introduction
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

router.get("/", async (req, res) => {
  try {
    const users = await User.find()
    res.json({
      ok: true,
      data: users
    })
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: err.message
    })
  }
})

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (user == null) {
      res.status(404).json({
        ok: false,
        message: "user/cannnot-find"
      })
    } else {
      res.status(201).json({
        ok: true,
        data: user
      })
    }
  } catch (err) {
    res.status(500).json({
      ok: false,
      message: "server/error"
    })
  }
})

module.exports = router