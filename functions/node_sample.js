var admin = require("firebase-admin")

var serviceAccount = require("./firebase_key.json")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

const idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjcxMTQzNzFiMmU4NmY4MGM1YzYxNThmNDUzYzk0NTEyNmZlNzM5Y2MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYm9hc3QtYXBwLWF1dGgiLCJhdWQiOiJib2FzdC1hcHAtYXV0aCIsImF1dGhfdGltZSI6MTY0MDQ4NzM4MCwidXNlcl9pZCI6IkdaYmQwd0pXb1hNaEp3TjVQNnFVT1RRTHRwSjIiLCJzdWIiOiJHWmJkMHdKV29YTWhKd041UDZxVU9UUUx0cEoyIiwiaWF0IjoxNjQwNDg3NTMyLCJleHAiOjE2NDA0OTExMzIsImVtYWlsIjoiY29zbWljcmFyZTdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNvc21pY3JhcmU3QGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.bVIVrympgwGrqPzV0rZVXQG3ehSvY8oz200aTorWAjCR90qOdPRQdcw_0mqKkFD7KqhTqLQ47Jjlq1gspL0-FaqYGMdeAV6g9nU7Z2TnxwcguZtKnRSviJUbCqAFLq1p696GxA2jSWmC1XU3o5EqkdZWVRe_zGz7Z6doo0eXlbwJpB2leS1UYP_dfqdsI6OoQmf2PLFGwQ175_HTraMyIrYiFz5lrWhE7IeQ3yi_xW1xlGbV5oOaLVjBGIbu8UKDHUmel44RvM7darPnnK7wFHcymmT3IQr1ibscO9rtbqOd0csQPFz689_SdJduccSJ8FhqHQi8sePfJJfz8qKUFw"
// const idToken = "ljadslfkjasldkfjalskdjf"

admin.auth().verifyIdToken(idToken)
  .then((decodedToken) => {
    console.log(decodedToken)
    console.log(decodedToken.uid)
  })
  .catch((err) => {
    console.log(err.code)
  })

/*

{
  iss: 'https://securetoken.google.com/boast-app-auth',
  aud: 'boast-app-auth',
  auth_time: 1640487380,
  user_id: 'GZbd0wJWoXMhJwN5P6qUOTQLtpJ2',
  sub: 'GZbd0wJWoXMhJwN5P6qUOTQLtpJ2',
  iat: 1640487532,
  exp: 1640491132,
  email: 'cosmicrare7@gmail.com',
  email_verified: false,
  firebase: { identities: { email: [Array] }, sign_in_provider: 'password' },
  uid: 'GZbd0wJWoXMhJwN5P6qUOTQLtpJ2'
}
GZbd0wJWoXMhJwN5P6qUOTQLtpJ2

*/