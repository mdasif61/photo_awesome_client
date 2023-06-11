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
import MySelectedClass from "../Dashboard/StudentDashboard/MySelectedClass";
import MyEnrolledClass from "../Dashboard/StudentDashboard/MyEnrolledClass";
import Payments from "../pages/Payments/Payments";
import PaymentHistory from "../Dashboard/StudentDashboard/PaymentHistory";
import Instructor from "../pages/Instructor";
import FeedBack from "../pages/FeedBack";
import UpdateClass from "../pages/UpdateClass";
import StudentPrivate from "../Shared/StudentPrivate";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path:'/instructor',
        element:<Instructor></Instructor>
      }
    ],
  },
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // student route
      {
        path: "selectClass",
        element: <StudentPrivate><MySelectedClass></MySelectedClass></StudentPrivate>,
      },
      {
        path: "enrolledClass",
        element: <StudentPrivate><MyEnrolledClass></MyEnrolledClass>,</StudentPrivate>
      },
      {
        path:'payments/:id',
        element:<Payments></Payments>
      },
      {
        path:'history',
        element:<PaymentHistory></PaymentHistory>
      },
      // instructor route
      {
        path: "addClass",
        element: (
          <InstructorPrivate>
            <AddClass></AddClass>
          </InstructorPrivate>
        ),
      },
      {
        path: "myClass",
        element: (
          <InstructorPrivate>
            <MyClass></MyClass>
          </InstructorPrivate>
        ),
      },
      {
        path:"updateClass/:id",
        element:<UpdateClass></UpdateClass>
      },
      // admin route
      {
        path: "manageClass",
        element: (
          <AdminPrivate>
            <ManageClass></ManageClass>
          </AdminPrivate>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <AdminPrivate>
            <ManageUsers></ManageUsers>
          </AdminPrivate>
        ),
      },
      {
        path:'feedback/:id',
        element:<FeedBack></FeedBack>
      }
    ],
  },
]);

export default router;
