const express = require("express")
const router = express.Router()
const User = require("../models/user.model")

const admin = require("firebase-admin")
const serviceAccount = require("../firebase_key.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

router.post("/verify", (req, res) => {
  const token = req.body.token
  admin.auth().verifyIdToken(token)
    .then((decodedToken) => {
      res.json({
        ok: true,
        data: decodedToken
      })
    })
    .catch((err) => {
      res.json({
        ok: false,
        message: err.code
      })
    })
})

module.exports = router