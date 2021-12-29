import { useState } from "react"
import firebase from "../plugins/firebase"
import "firebase/auth"
import { useNavigate } from "react-router-dom"
import errors from "../plugins/firebaseAuthError"
import axios from "axios"

const Register = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [dis, setDis] = useState(false)
  const [message, setMessage] = useState("")
  const [introduction, setIntroduction] = useState("")

  let navigate = useNavigate()

  const handleOnSubmit = () => {
    setDis(true)
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        axios.post("http://localhost:5001/user", {
          email: email,
          name: name,
          uid: userCredential.user.uid,
          introduction: introduction
        })
          .then((res) => {
            setMessage("")
            setEmail("")
            setPassword("")
            setName("")
            setDis(false)
            setIntroduction("")
            navigate("/")
          })
          .catch((err) => {
            setMessage(erorrs(err.response.data.message))
            setDis(false)
          })
      })
      .catch((err) => {
        setMessage(errors(err.code))
        setDis(false)
      })
    setDis(false)
  }

  return(
    <div>
      <h2>新規登録</h2>
      <div>
        <p>{message=="" ? "" : message}</p>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <input type="text" placeholder="UserName" onChange={(e) => setName(e.target.value)} value={name} />
        <textarea placeholder="Introduction" onChange={(e) => setIntroduction(e.target.value)} value={introduction}></textarea>
        <button onClick={handleOnSubmit} disabled={dis}>登録</button>
      </div>
    </div>
  )
}

export default Register