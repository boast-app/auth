import { 
  Outlet,
  Navigate
} from "react-router"
import { useAuthContext } from "../context/authContext"

const Private = () => {
  const { user } = useAuthContext()

  if(user===null) {
    return(
      <Navigate to="/" />
    )
  }

  return(
    <Outlet />
  )
}

export default Private