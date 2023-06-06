import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import LoginLayout from "../LayOut/LoginLayout";
import Login from "../Shared/Login";
import Register from "../Shared/Register";
import Home from "../Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<Home></Home>
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
