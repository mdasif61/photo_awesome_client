import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../Shared/Context";

const ManageUsers = () => {
  const { user } = useContext(AuthContext);
  const currentUser = user;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });

  const handleMakeAdmin = (id) => {
    axios
      .patch(
        `https://b7a12-summer-camp-server-side-mdasif61.vercel.app/makeAdmin/${id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  const handleMakeInstructor = (id) => {
    axios
      .patch(
        `https://b7a12-summer-camp-server-side-mdasif61.vercel.app/makeInstructor/${id}`
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
        }
      });
  };

  return (
    <div className="w-full p-5 mx-auto">
      <Helmet>
        <title>Manage Users | Photo Awesome</title>
      </Helmet>
      <h1 className="text-2xl font-bold text-center mb-5">User Management</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="text-center">
                <th>{index + 1}</th>
                <th>{user.name}</th>
                <td>{user.email}</td>
                <td>{user.status}</td>
                <td>
                  <button
                    disabled={user.status === "Admin"}
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-warning btn-sm mr-2"
                  >
                    Make Admin
                  </button>
                  <button
                    disabled={
                      user.status === "Instructor" ||
                      currentUser.email === user.email
                    }
                    onClick={() => handleMakeInstructor(user._id)}
                    className="btn btn-primary btn-sm"
                  >
                    Make Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
