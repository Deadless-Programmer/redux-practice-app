import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }) {

  const location_path =useLocation();
  const { isLoggedIn, loading } = useSelector((state) => state.auth);

  if (loading) {
    return <div className="text-center p-10">Loading...</div>; // or spinner
  }
  return isLoggedIn ? children : <Navigate to="/login" state={{from:location_path}} replace />;
}
