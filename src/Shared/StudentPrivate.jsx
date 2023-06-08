// import { useContext } from "react";
// import { AuthContext } from "./Context";
// import useAdmin from "../hooks/useAdmin";
// import useInstructor from "../hooks/useInstructor";
// import { Navigate, useLocation } from "react-router-dom";

// const StudentPrivate = ({ children }) => {
//   const location = useLocation();
//   const { isAdmin } = useAdmin();
//   const { isInstructor } = useInstructor();
//   if (isAdmin || isInstructor) {
//     return;
//   }
//   return <Navigate to="/" replace state={{ from: location }}></Navigate>;
// };

// export default StudentPrivate;
