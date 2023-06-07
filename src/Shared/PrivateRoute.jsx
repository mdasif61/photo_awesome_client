import { useContext } from "react";
import { AuthContext } from "./Context";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location =useLocation();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <span className="loading loading-spinner text-success"></span>
      </div>
    );
  }
  if(user){
    return children;
  }

  return <Navigate to='/login' state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;
