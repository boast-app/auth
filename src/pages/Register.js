import { useState } from "react"
import firebase from "../plugins/firebase"
import "firebase/auth"
import { useNavigate } from "react-router-dom"
import errors from "../plugins/firebaseAuthError"
import axios from "../plugins/axios"

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
    setMessage("")
    if (!email || !password || !name || !introduction) {
      setMessage("空欄があります")
      setDis(false)
      return 0
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        axios.post("user", {
          email: email,
          name: name,
          uid: userCredential.user.uid,
          introduction: introduction
        })
          .then((res) => {
            setDis(false)
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
    navigate("/")
    setDis(false)
  }

  return(
    <div>
      <h2>新規登録</h2>
      <div>
        <p>{message=="" ? "" : message}</p>

        <div>
          <input 
            type="email" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            value={email} 
          />
        </div>

        <div>
          <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
          />
        </div>

        <div>
          <input 
            type="text" 
            placeholder="UserName" 
            onChange={(e) => setName(e.target.value)} 
            value={name} 
          />
        </div>

        <div>
          <textarea 
            placeholder="Introduction" 
            onChange={(e) => setIntroduction(e.target.value)} 
            value={introduction}
          ></textarea>
        </div>

        <button onClick={handleOnSubmit} disabled={dis}>登録</button>
      </div>
    </div>
  )
}

export default Register