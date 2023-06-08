import { FaTrash } from "react-icons/fa";
import useSelectedClass from "../../hooks/useSelectedClass";

const MySelectedClass = () => {
  const { selectClass, refetch } = useSelectedClass();

  return (
    <div className="p-12">
      <h1 className="text-xl font-bold mb-5 text-gray-600">
        Total Select Class : {selectClass.length}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {selectClass.map((select) => (
          <div
            key={select._id}
            className="p-5 border rounded-md flex flex-col justify-between"
          >
            <div className="bg-black relative rounded-md h-56 overflow-hidden">
              <img className="h-full w-full" src={select.image} alt="" />
              <button className="btn absolute top-5 border-none right-5 text-red-600 bg-white rounded-full shadow-lg btn-sm">
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
              <h2 className="text-gray-600">
                Instructor : {select.instructor}
              </h2>
            </div>
            <div>
              <button className="btn bg-green-500 text-white text-lg btn-block">
                Pay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySelectedClass;
