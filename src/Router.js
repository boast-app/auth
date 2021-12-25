import { 
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import App from "./App"
import About from "./pages/About"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Index from "./pages/Index"

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="about" element={<About />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router