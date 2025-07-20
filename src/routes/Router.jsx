import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import Main from "../layout/Main";
import Home from "../pages/Home";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import PrivateRoute from "../components/PrivateRoute"



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LoginPage/>
      },
      {
        path: "/register",
        element: <RegisterPage/>
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard/></PrivateRoute>
      },
      
    ],
}])