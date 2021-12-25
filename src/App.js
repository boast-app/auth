import {
  Outlet,
  Link
} from "react-router-dom"
import { useAuthContext } from "./context/authContext"

const App = () => {
  const { user } = useAuthContext()

  return(
    <div>
      {user===null ? 
        <div>
          <Link to="/">Index</Link> |{" "}
          <Link to="login">Login</Link> |{" "}
          <Link to="register">Register</Link>
        </div>
        :
        <div>
          <Link to="/">Index</Link> |{" "}
          <Link to="about">About</Link>
        </div> 
      }

      <Outlet />
    </div>
  )
}

export default App