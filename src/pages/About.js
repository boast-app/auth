import { useAuthContext } from "../context/authContext"
import firebase from "../plugins/firebase"
import "firebase/auth"

const About = () => {
  const { user } = useAuthContext()

  const handleOnLogout = () => {
    firebase.auth().signOut()
  }

  const handleOnToken = () => {
    firebase.auth().currentUser.getIdToken(true)
      .then((idToken) => {
        console.log(idToken)
      })
  }

  return(
    <div>
      <p>About</p>
      <p>ログインしていないと見れないよ</p>
      <p>{user===null ? "" : user.email}</p>
      <button onClick={handleOnLogout}>ログアウト</button>
      <div>
        <h3>TOKENを認証する</h3>
        <button onClick={handleOnToken}>Here!</button>
      </div>
    </div>
  )
}

export default About