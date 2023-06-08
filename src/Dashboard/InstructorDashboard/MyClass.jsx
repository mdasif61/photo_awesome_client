import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Shared/Context";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyClass = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClass = [], refetch } = useQuery({
    queryKey: ["myclass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClass?email=${user?.email}`);
      return res.data;
    },
  });
  console.log(myClass);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-5 p-20">
      {myClass.map((classes) => (
        <div key={classes._id} className="p-5 flex flex-col justify-between border rounded-md">
          <div className="bg-black h-48 overflow-hidden">
            <img className="w-full h-full" src={classes.image} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold mt-5">Class :{classes.name}</h1>
            <h1 className="text-lg font-semibold my-2">
              Price :{classes.price}
            </h1>
            <h1 className="t">Available Seats :{classes.seats}</h1>
            <h1 className={`badge ${classes.status=='Approved'&& 'badge-success'} ${classes.status=='Pending'&& 'badge-warning'} mt-3 p-3 font-semibold`}>{classes.status}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClass;
