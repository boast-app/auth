import { render } from "react-dom"
import Router from "./Router"
import { AuthProvider } from "./context/authContext"

const rootDom = document.getElementById("root")
render(
  <AuthProvider>
    <Router />
  </AuthProvider>,
  rootDom
)