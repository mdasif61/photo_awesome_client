import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Shared/Context";

const usePayments = () => {
    const [axiosSecure]=useAxiosSecure()
    const {user}=useContext(AuthContext)
    const {data:history=[],refetch}=useQuery({
        queryKey:['history', user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/history?email=${user?.email}`)
            return res.data;
        }
    })
    return {history,refetch}
};

export default usePayments;