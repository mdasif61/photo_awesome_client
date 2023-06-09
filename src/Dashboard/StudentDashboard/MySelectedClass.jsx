import { FaTrash } from "react-icons/fa";
import useSelectedClass from "../../hooks/useSelectedClass";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const MySelectedClass = () => {
  const { selectClass, refetch } = useSelectedClass();
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selectDelete/${id}`).then((res) => {
          refetch();
          if (res.data.deletedCoutn > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };

  return (
    <div className="p-12">
      <h1 className="text-xl font-bold mb-5 text-gray-600">
        Total Select Class : {selectClass.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {selectClass.map((select) => (
          <div
            key={select._id}
            className="p-5 bg-white shadow-xl rounded-md flex flex-col justify-between"
          >
            <div className="bg-black relative rounded-md h-36 overflow-hidden">
              <img className="h-full w-full" src={select.image} alt="" />
              <button
                onClick={() => handleDelete(select._id)}
                className="btn absolute top-5 border-none right-5 text-red-600 bg-white rounded-full shadow-lg btn-sm"
              >
                <FaTrash />
              </button>
            </div>
            <div>
              <h1 className="text-xl text-gray-600 my-3 font-bold">
                Class : {select.name}
              </h1>
              <h2 className="text-gray-600 font-semibold text-lg">
                Price : ${select.price}
              </h2>
              <h2 className="text-gray-600 my-2">
                Instructor : {select.instructor}
              </h2>
            </div>
            <div>
              <Link to={`/dashboard/payments/${select._id}`}>
                <button className="btn bg-green-500 text-white text-lg btn-block">
                  Pay
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelectedClass;
