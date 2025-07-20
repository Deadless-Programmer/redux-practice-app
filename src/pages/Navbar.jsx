
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, } from "react-router-dom";
import { auth } from "../firebase";
import { logout } from "../redux/authSlice";

export default function Navbar() {



  const user = useSelector((state) => state.auth.user);
 console.log(user?.email)
const dispatch = useDispatch();
// const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth); // Firebase থেকে logout
    dispatch(logout());  // Redux state reset
   // navigate("/login");  // Redirect to login
  } catch (error) {
    console.error("Logout failed:", error);
  }
};


  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-indigo-600">
        Redux App
      </Link>
      <div className="space-x-4">
        <Link
          to="/"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Home
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Dashboard
        </Link>
        {user? <Link
          onClick={handleLogout}
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Logout
        </Link> : <Link
          to="/login"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Login
        </Link>}
        <Link
          to="/register"
          className="text-gray-700 hover:text-indigo-600 transition"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}
