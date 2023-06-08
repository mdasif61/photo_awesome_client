import { useContext } from "react";
import { AuthContext } from "./Context";
import useInstructor from "../hooks/useInstructor";
import { Navigate, useLocation } from "react-router-dom";

const InstructorPrivate = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location=useLocation()
    const { isInstructor, instructorLoading } = useInstructor()
    if (loading || instructorLoading) {
        return <div className="flex items-center justify-center w-full h-screen">
            <span className="loading loading-spinner text-success"></span>
        </div>
    }
    if(user && isInstructor){
        return children
    }
    return <Navigate to='/' replace state={{from:location}}></Navigate>;
};

export default InstructorPrivate;