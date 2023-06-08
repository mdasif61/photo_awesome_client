import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Shared/Context";
import useAxiosSecure from "./useAxiosSecure";

const useInstructor = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: isInstructor, isLoading:instructorLoading } = useQuery({
        queryKey:['instructor', user?.email],
        enabled:!loading,
        queryFn:async()=>{
            const res=await axiosSecure.get(`/instructor/${user?.email}`)
            return res.data.instructor;
        }
    })
    return {isInstructor, instructorLoading}
};

export default useInstructor;