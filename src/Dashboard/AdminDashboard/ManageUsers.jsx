import axios from "axios";
import useUsers from "../../hooks/useUsers";

const ManageUsers = () => {

  const { users, refetch } = useUsers()


  const handleMakeAdmin = (id) => {
    axios.patch(`http://localhost:5000/makeAdmin/${id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch()
        }
      })
  }

  const handleMakeInstructor = (id) => {
    axios.patch(`http://localhost:5000/makeInstructor/${id}`)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          refetch()
        }
      })
  }

  return (
    <div className="w-full p-5 mx-auto">
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
                  <button disabled={user.status === 'Admin'} onClick={() => handleMakeAdmin(user._id)} className="btn btn-warning btn-sm mr-2">
                    Make Admin
                  </button>
                  <button disabled={user.status === 'Instructor'} onClick={() => handleMakeInstructor(user._id)} className="btn btn-primary btn-sm">
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
