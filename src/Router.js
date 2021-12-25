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
          <Route index element={<Index />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router