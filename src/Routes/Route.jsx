import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import LoginLayout from "../LayOut/LoginLayout";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import Home from "../Home/Home";
import Classes from "../pages/Classes";

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
  }
]);

export default router;
