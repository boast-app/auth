import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Private from "./components/Private"
import App from "./App"
import About from "./pages/About"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Index from "./pages/Index"
import User from "./pages/User"

const Use = () => {
  return(
    <div>
      <h2>UserMyPage</h2>
    </div>
  )
}

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<Private />}>
            <Route path="about" element={<About />} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="user">
            <Route path=":id" element={<User />} />
            <Route index element={<Use />} />
          </Route>
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router