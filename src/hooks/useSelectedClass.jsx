import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Shared/Context";

const useSelectedClass = () => {
    const [axiosSecure]=useAxiosSecure();
    const {user}=useContext(AuthContext)
    const {data:selectClass=[],refetch}=useQuery({
        queryKey:['selectGet', user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/selectGet?email=${user?.email}`)
            return res.data;
        }
    })
    return {selectClass,refetch}
};

export default useSelectedClass;