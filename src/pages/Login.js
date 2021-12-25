import { useState } from "react"
import firebase from "../plugins/firebase"
import "firebase/auth"
import { useNavigate } from "react-router-dom"
import errors from "../plugins/firebaseAuthError"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dis, setDis] = useState(false)
  const [message, setMessage] = useState("")

  let navigate = useNavigate()

  const handleOnSubmit = () => {
    setDis(true)
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        setMessage("")
        setEmail("")
        setPassword("")
        setDis(false)
        navigate("/")
      })
      .catch((err) => {
        setMessage(errors(err.code))
        setDis(false)
      })
  }

  return(
    <div>
      <h2>ログイン</h2>
      <div>
        <p>{message=="" ? "" : message}</p>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <button onClick={handleOnSubmit} disabled={dis}>ログイン</button>
      </div>
    </div>
  )
}

export default Login