import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from ".//components/Dashboard/EmployeeDashboard.jsx"
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage.jsx'


const App = () => {

  const [user, setUser] = useState(null)

  const handleLogin = (email, password) => {
    if (email === "admin@admin.com" && password === "123") {
      setUser("admin")
      console.log(user)
    } else if (email === "user@user.com" && password === "123") {
      setUser("employee")
      console.log(user)
    } else {
      alert("invalid credentials")
    }
  }
  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()

  },)



  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  )
}

export default App
