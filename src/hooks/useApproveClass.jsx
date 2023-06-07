import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Shared/Context";

const useApproveClass = () => {
    const {loading}=useContext(AuthContext)
    const { data: approvedClass = [], refetch } = useQuery({
        queryKey: ['classes'],
        enabled:!loading,
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/approved')
            return res.json()
        }
    })
    return { approvedClass, refetch }
};

export default useApproveClass;