import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const ClassesCart = ({ singleClass, handleSelect }) => {
  const { name, instructor, price, status, seats, _id, image } = singleClass;

  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructor();

  return (
    <div
      className={`bg-white hover:scale-95 duration-300 ${
        seats === 0 && "bg-red-300 text-red-500 border-red-600"
      } text-black flex flex-col justify-between p-5 border border-green-500 rounded-md`}
    >
      <div>
        <img className="rounded" src={image} alt="" />
        <h1 className="text-xl font-bold my-4">{name}</h1>
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
      <button
        disabled={isAdmin || isInstructor || seats == 0}
        onClick={() => handleSelect(singleClass)}
        className="btn bg-green-700 hover:bg-green-500 border-none btn-block text-white mt-3"
      >
        SELECT COURSE
      </button>
    </div>
  );
};

export default ClassesCart;
