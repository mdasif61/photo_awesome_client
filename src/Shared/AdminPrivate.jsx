import { useContext } from "react";
import { AuthContext } from "./Context";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminPrivate = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const { isAdmin, adminLoading } = useAdmin()
    const location=useLocation()

    if (loading || adminLoading) {
        return <div className="flex items-center justify-center w-full h-screen">
            <span className="loading loading-spinner text-success"></span>
        </div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate to='/' state={{from:location}} replace></Navigate>;
};

export default AdminPrivate;