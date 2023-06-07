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
        element:<AddClass></AddClass>
      },
      {
        path:'myClass',
        element:<MyClass></MyClass>
      },
      // admin route
      {
        path:'manageClass',
        element:<ManageClass></ManageClass>
      },
      {
        path:'manageUsers',
        element:<ManageUsers></ManageUsers>
      }
    ]
  }
]);

export default router;
