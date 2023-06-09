import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const ClassesCart = ({ singleClass, handleSelect }) => {
  const { name, instructor, price, status, seats, _id, image } = singleClass;

  const {isAdmin}=useAdmin()
  const {isInstructor}=useInstructor()

  return (
    <div className="bg-white text-black flex flex-col justify-between p-5 border border-green-500 rounded-md">
      <div>
        <h1 className="text-xl font-bold my-4">Class : {name}</h1>
        <h1>
          <span className="font-semibold">Instructor :</span> {instructor}
        </h1>
        <h3>
          <span className="font-semibold">Available Seats :</span> {seats}
        </h3>
        <h3>
          <span className="font-semibold">Price :</span> ${price}
        </h3>
      </div>
      <button disabled={isAdmin || isInstructor} onClick={()=>handleSelect(singleClass)} className="btn bg-green-700 hover:bg-green-500 border-none btn-block text-white mt-3">
        SELECT COURSE
      </button>
    </div>
  );
};

export default ClassesCart;
