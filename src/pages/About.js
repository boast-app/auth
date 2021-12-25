import { useAuthContext } from "../context/authContext"
import firebase from "../plugins/firebase"
import "firebase/auth"

const About = () => {
  const { user } = useAuthContext()

  const handleOnLogout = () => {
    firebase.auth().signOut()
  }

  return(
    <div>
      <p>About</p>
      <p>ログインしていないと見れないよ</p>
      <p>{user===null ? "" : user.email}</p>
      <button onClick={handleOnLogout}>ログアウト</button>
    </div>
  )
}

export default About