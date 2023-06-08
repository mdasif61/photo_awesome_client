const ClassesCart = ({ singleClass, handleSelect }) => {
  const { name, instructor, price, status, seats, _id, image } = singleClass;
  return (
    <div className="bg-green-800 flex flex-col justify-between text-white p-5 bg-opacity-50">
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
      <button onClick={()=>handleSelect(singleClass)} className="btn bg-green-700 hover:bg-green-500 border-none btn-block text-white mt-3">
        SELECT COURSE
      </button>
    </div>
  );
};

export default ClassesCart;
