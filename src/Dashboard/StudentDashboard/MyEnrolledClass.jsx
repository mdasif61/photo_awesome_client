import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../Shared/Context";

const MyEnrolledClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [enrolls, setEnrolls] = useState([]);

  useEffect(() => {
    axiosSecure.get(`/payments?email=${user?.email}`).then((res) => {
      setEnrolls(res.data);
    });
  }, [axiosSecure, user?.email]);

  return enrolls.length > 0 ? (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {enrolls.map((enroll) => (
            <div key={enroll._id} className="border p-5 bg-white hover:scale-95 duration-300">
              <img src={enroll.image} alt="" />
              <h1 className="text-lg font-bold text-gray-500 my-3">
                {enroll.className}
              </h1>
              <hr />
              <p className="mt-2">Instructor : {enroll.instructor}</p>
              <h1 className="badge mt-2 badge-success font-semibold p-3">
                Price : ${enroll.price}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-lg font-bold text-gray-500">Not Enroll Classes</h1>
    </>
  );
};

export default MyEnrolledClass;
