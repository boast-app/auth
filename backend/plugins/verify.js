const admin = require("firebase-admin")
const serviceAccount = require("./firebase_key.json")
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const verify = (token) => {
  return admin.auth().verifyIdToken(token)
    .then(decodedToken => {
      return decodedToken
    })
    .catch(err => {
      throw err.code
    })
}

module.exports = verify