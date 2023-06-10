import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const StudentPrivate = ({ children }) => {
  const location = useLocation();
  const navigate=useNavigate()
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructor();
  if (isAdmin || isInstructor) {
    navigate('/')
  }
  else{
    return children
  }
  return <Navigate to="/" replace state={{ from: location }}></Navigate>;
};

export default StudentPrivate;
