// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import { useContext } from "react";
// import { AuthContext } from "../Shared/Context";

// const useUsers = () => {
   
//     const [axiosSecure]=useAxiosSecure()
//     const {loading}=useContext(AuthContext)

//     const { data: users = [], refetch } = useQuery({
//         queryKey: ["users"],
//         queryFn: async () => {
//             const res = await axiosSecure.get("/users");
//             return res.data;
//         },
//     });
//     return {users, refetch}
// };

// export default useUsers;