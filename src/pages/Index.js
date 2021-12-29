import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "../plugins/axios"

const Index = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get("user")
      .then((res) => {
        setUsers(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }, [])
  return(
    <div>
      <h3>Users</h3>
      <div>
        {users.map((user) => {
          return(
            <div key={user._id}>
              <Link to={`/user/${user._id}`}>{user.name}</Link>          
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Index