import {
  Outlet,
  Link
} from "react-router-dom"
const App = () => {
  return(
    <div>
      <Link to="/">Index</Link> |{" "}
      <Link to="login">Login</Link> |{" "}
      <Link to="register">Register</Link> |{" "}
      <Link to="about">About</Link>

      <Outlet />
    </div>
  )
}

export default App