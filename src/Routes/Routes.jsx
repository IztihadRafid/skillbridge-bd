import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import AllJobs from "../pages/Home/AllJobs/AllJobs";
import GetSupport from "../pages/GetSupport/GetSupport";
import Login from "../pages/Login/Login";
import SignUp from "../pages/Login/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Secret/Secret";
import Dashboard from "../Layout/DashBoard/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import DashboardContent from "../pages/Dashboard/Cart/DashboardContent";
import AllUsers from "../pages/Dashboard/Cart/AllUsers";
import AddJobs from "../pages/Dashboard/Cart/AddJobs";
import AdminRoutes from "./AdminRoutes";
import ManageJobs from "../pages/Dashboard/Cart/ManageJobs";
import UpdateJob from "../pages/Dashboard/Cart/UpdateJob/UpdateJob";
import UpdateCV from "../pages/Dashboard/Cart/UpdateCV/UpdateCV";
import Messages from "../pages/Dashboard/Cart/Messages/Messages";
import MessageForm from "../pages/Dashboard/Cart/MessageForm/MessageForm";
import ManageMessage from "../pages/Dashboard/Cart/Messages/ManageMessage";



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
          path: 'signUp',
          element: <SignUp></SignUp>
        },
        {
          path: "secret",
          element: <PrivateRoutes><Secret></Secret></PrivateRoutes>
        }
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children:[
        {
          path:'cart',
          element: <DashboardContent></DashboardContent>
        },
        
        {
          path: 'updateCv',
          element: <UpdateCV></UpdateCV>
        },
        {
          path: 'message',
          element:<Messages></Messages>
        },
        // admin routes
        {
          path: 'allusers',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path: 'addjobs',
          element: <AdminRoutes><AddJobs></AddJobs></AdminRoutes>
        },
        {
          path: 'managejobs',
          element: <AdminRoutes><ManageJobs></ManageJobs></AdminRoutes>
        },
        {
          path: 'updateJob/:id',
          element: <AdminRoutes><UpdateJob></UpdateJob></AdminRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path:'messageform',
          element: <MessageForm></MessageForm>
        },
        {
          path: 'manageMessage',
          element: <ManageMessage></ManageMessage>
        }
      ]
    }
  ]);