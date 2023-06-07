import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageUsers = () => {

    const [axiosSecure]=useAxiosSecure()

    const {data:users=[], refetch}=useQuery({
        queryKey:['users'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/users')
            return res.data
        }
    })

    return (
        <div>
           <h1>Mangage Users</h1> 
        </div>
    );
};

export default ManageUsers;