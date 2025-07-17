import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { login, logout } from "../redux/authSlice" // path adjust if needed

const AuthStatus = () => {
  const dispatch = useDispatch()

  // Redux store থেকে data আনছি
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  const user = useSelector((state) => state.auth.user)

  const handleLogin = () => {
    const fakeUser = {
      name: "Sakib Al Hasan",
      email: "sakib@example.com",
    }
    dispatch(login(fakeUser))
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="p-4 border rounded-lg w-fit mx-auto mt-10 text-center shadow-lg">
      {isLoggedIn ? (
        <>
          <h2 className="text-xl font-semibold mb-2">👤 Welcome, {user.name}</h2>
          <p className="mb-4 text-gray-600">Email: {user.email}</p>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold mb-4">🔒 You are logged out</h2>
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </>
      )}
    </div>
  )
}

export default AuthStatus
