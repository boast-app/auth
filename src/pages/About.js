import { useAuthContext } from "../context/authContext"
import firebase from "../plugins/firebase"
import "firebase/auth"
import axios from "axios"
import { useState } from "react"

const About = () => {
  const { user } = useAuthContext()
  const [message, setMessage] = useState("認証ボタンをクリックして認証を確認してください")

  const handleOnLogout = () => {
    firebase.auth().signOut()
  }

  const handleOnToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then(idToken => {
        axios.post("http://localhost:5001/user/verify", {
          token: idToken
        })
          .then(res => {
            if(res.data.ok) {
              setMessage(`${res.data.data.email}として正常に認証されています`)
            } else {
              setMessage(`${res.data.message}が原因で正常な認証が行われていません`)
            }
          })
      })
  }

  return(
    <div>
      <p>About</p>
      <p>ログインしていないと見れないよ</p>
      <p>{user===null ? "" : user.email}</p>
      <button onClick={handleOnLogout}>ログアウト</button>
      <div>
        <button onClick={handleOnToken}>{message===""  ? "" : message}</button>
      </div>
    </div>
  )
}

export default About