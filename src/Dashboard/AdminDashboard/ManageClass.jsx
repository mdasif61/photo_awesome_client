import useClasses from "../../hooks/useClasses";

const ManageClass = () => {
  const { classes } = useClasses();

  return (
    <div className="overflow-x-auto w-full p-10">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Instructor</th>
            <th>Instructor Email</th>
            <th>Available Seats</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((singleClass) => (
            <tr key={singleClass._id}>
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
              <th>{singleClass.price}</th>
              <th>
                <button className="btn btn-success btn-sm">Approved</button>
                <button className="btn btn-warning btn-sm">Pending</button>
                <button className="btn btn-error btn-sm">Denied</button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageClass;
