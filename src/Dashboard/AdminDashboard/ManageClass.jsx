import axios from "axios";
import useClasses from "../../hooks/useClasses";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const ManageClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { classes, refetch } = useClasses();

  const handleApprove = (id) => {
    axios
      .patch(
        `https://b7a12-summer-camp-server-side-mdasif61.vercel.app/approved/${id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleDenied = (id) => {
    axios
      .patch(
        `https://b7a12-summer-camp-server-side-mdasif61.vercel.app/denied/${id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return classes.length > 0 ? (
    <>
      <div className="overflow-x-auto w-full p-5">
        <Helmet>
          <title>Manage Classes | Photo Awesome</title>
        </Helmet>
        <table className="table">
          <thead>
            <tr className="text-center font-bold text-black">
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Instructor Email</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass) => (
              <tr className="text-center" key={singleClass._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={singleClass.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{singleClass.name}</td>
                <td>{singleClass.instructor}</td>
                <th>{singleClass.email}</th>
                <th>{singleClass.seats}</th>
                <th>${singleClass.price}</th>
                <th>{singleClass.status}</th>
                <th>
                  <button
                    disabled={
                      singleClass.status === "Denied" ||
                      singleClass.status === "Approved"
                    }
                    onClick={() => handleApprove(singleClass._id)}
                    className="btn btn-success btn-sm"
                  >
                    Approve
                  </button>
                  <br />
                  <button
                    onClick={() => handleDenied(singleClass._id)}
                    disabled={
                      singleClass.status == "Approved" ||
                      singleClass.status === "Denied"
                    }
                    className="btn btn-sm my-2"
                  >
                    Deny
                  </button>
                  <br />
                  <Link to={`/dashboard/feedback/${singleClass._id}`}>
                    <button className="btn btn-sm">Send Feedback</button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <>
      <h1 className="text-2xl font-bold text-gray-500">Not Found Classes</h1>
    </>
  );
};

export default ManageClass;
