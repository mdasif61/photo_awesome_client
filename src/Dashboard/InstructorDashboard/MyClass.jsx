import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Shared/Context";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyClass = () => {
    const {user}=useContext(AuthContext)
    const [axiosSecure]=useAxiosSecure()
    const {data:myClass=[], refetch}=useQuery({
        queryKey:['myclass', user?.email],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/classes?email=${user?.email}`)
            return res.data;
        }
        
    })
    console.log(myClass)
    return (
        <div>
            <h1>My Class</h1>
        </div>
    );
};

export default MyClass;