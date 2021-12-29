import { useParams } from "react-router"
import axios from "axios"
import { useState, useEffect } from "react"

const User = () => {
  const { id } = useParams()
  const [user, setUser] = useState({})

  useEffect(() => {
    axios.get(`http://localhost:5001/user/${id}`)
      .then((res) => {
        setUser(res.data.data)
        console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  }, [])

  return(
    <div>
      <h2>UserPage</h2>
      <h3>{user.name}</h3>
      <p style={{ whiteSpace: "pre-line"}}>{user.introduction}</p>
    </div>
  )
}

export default User