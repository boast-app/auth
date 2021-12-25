import { createContext, useState, useContext, useEffect } from "react"
import firebase from "../plugins/firebase"
import "firebase/auth"

const AuthContext = createContext()

export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState("")
  const [loading, setLoading] = useState(true)

  const value = {
    user,
  }

  useEffect(() => {
    const unsubscribed = firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return () => {
      unsubscribed()
    }
  }, [])

  if (loading) {
    return <div />
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}