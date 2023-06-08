import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import LoginLayout from "../LayOut/LoginLayout";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import Home from "../Home/Home";
import Classes from "../pages/Classes";
import Dashboard from "../Dashboard/Dashboard";
import AddClass from "../Dashboard/InstructorDashboard/AddClass";
import MyClass from "../Dashboard/InstructorDashboard/MyClass";
import PrivateRoute from "../Shared/PrivateRoute";
import ManageClass from "../Dashboard/AdminDashboard/ManageClass";
import ManageUsers from "../Dashboard/AdminDashboard/ManageUsers";
import AdminPrivate from "../Shared/AdminPrivate";
import InstructorPrivate from "../Shared/InstructorPrivate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/classes',
          element:<Classes></Classes>
        }
    ]
  },
  {
    path:'/',
    element:<LoginLayout></LoginLayout>,
    children:[
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'addClass',
        element:<InstructorPrivate><AddClass></AddClass></InstructorPrivate>
      },
      {
        path:'myClass',
        element:<InstructorPrivate><MyClass></MyClass></InstructorPrivate>
      },
      // admin route
      {
        path:'manageClass',
        element:<AdminPrivate><ManageClass></ManageClass></AdminPrivate>
      },
      {
        path:'manageUsers',
        element:<AdminPrivate><ManageUsers></ManageUsers></AdminPrivate>
      }
    ]
  }
]);

export default router;
