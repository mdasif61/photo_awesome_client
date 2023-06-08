import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Shared/Context";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const {data:isAdmin, isLoading:adminLoading}=useQuery({
        queryKey:['isAdmin', user?.email ],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/admin/${user?.email}`)
            return res.data.admin
        }
    })
    return {isAdmin, adminLoading}
};

export default useAdmin;