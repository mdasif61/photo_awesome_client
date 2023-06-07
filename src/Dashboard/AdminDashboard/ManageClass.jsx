import axios from "axios";
import useClasses from "../../hooks/useClasses";

const ManageClass = () => {
  const { classes } = useClasses();

  const handleApprove=(id)=>{
    axios.patch(`http://localhost:5000/classes/${id}`,{status:'Approved'})
  }

  return (
    <div className="overflow-x-auto w-full p-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="text-center font-bold text-lg text-black">
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
                <button onClick={()=>handleApprove(singleClass._id)} className="btn btn-success btn-sm">Approve</button>
                <button className="btn btn-sm mx-2">Deny</button>
                <button className="btn btn-sm">Send Feedback</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
