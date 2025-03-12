import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllJobs from "../pages/Home/AllJobs/AllJobs";
import GetSupport from "../pages/GetSupport/GetSupport";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'getsupport',
          element:<GetSupport></GetSupport>,
        },
        {
          path: 'alljobs',
          element:<AllJobs></AllJobs>,
        },
        {
          path: "login",
          element: <Login></Login>
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>
        }
        
      ]
    },
  ]);