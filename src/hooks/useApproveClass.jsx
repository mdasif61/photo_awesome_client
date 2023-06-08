import { useQuery } from "@tanstack/react-query";

const useApproveClass = () => {
    const { data: approvedClass = [], refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/approved')
            return res.json()
        }
    })
    return { approvedClass, refetch }
};

export default useApproveClass;