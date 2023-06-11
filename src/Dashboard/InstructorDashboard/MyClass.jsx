import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Shared/Context";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const { data: myClass = [] } = useQuery({
    queryKey: ["myclass", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myClass?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <Helmet><title>My Classes | Photo Awesome</title></Helmet>
      {myClass.map((classes) => (
        <div
          key={classes._id}
          className="p-5 flex flex-col justify-between border rounded-md"
        >
          <div className="bg-black h-36 overflow-hidden">
            <img className="w-full h-full" src={classes.image} alt="" />
          </div>
          <div>
            <h1 className="text-xl font-bold mt-5">{classes.name}</h1>
            <h1 className="text-lg font-semibold my-2">
              Price : {classes.price}
            </h1>
            <h1 className="t">Available Seats : {classes.seats}</h1>
            <h3 className="text-sm">Total Enrolled : {classes.total_enroll}</h3>
            <div className="flex justify-between">
              <h1
                className={`badge ${classes.status == "Approved" && "badge-success"
                  } ${classes.status == "Pending" && "badge-warning"} ${classes.status == "Denied" && "badge-error"
                  } mt-3 p-3 font-semibold`}
              >
                {classes.status}
              </h1>
              <Link to={`/dashboard/updateClass/${classes._id}`}>
                <button className="btn bg-green-100 hover:bg-green-200 border-none">
                  <FaEdit />
                </button>
              </Link>
            </div>
            {classes.feedback && <p className="text-sm mt-2 py-2 px-3 bg-red-100 text-red-600 rounded-full border border-red-600">{classes.feedback}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClass;
