import { useForm } from "react-hook-form";

const AddClass = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-8/12 mx-auto">
      <form className="w-full">
        <h1 className="text-2xl font-bold">Add Your Class</h1>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
          <div className="w-full">
            <label htmlFor="className">Class Name</label>
            <br />
            <input
              className="w-full focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="text"
              id=""
            />
          </div>

          <div className="w-full">
            <label htmlFor="instructorName">Instructor Name</label>
            <br />
            <input
              className="w-full focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="text"
              id=""
            />
          </div>

          <div className="w-full">
            <label htmlFor="instructorEmail">Instructor Email</label>
            <br />
            <input
              className="w-full focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="text"
              id=""
            />
          </div>

          <div className="w-full">
            <label htmlFor="seat">Available Seats</label>
            <br />
            <input
              className="w-full focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="number"
              id=""
            />
          </div>

          <div className="w-full">
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="w-full focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="number"
              id=""
            />
          </div>
          <div className="w-full">
            <label htmlFor="image">Image</label>
            <br />
            <input
              type="file"
              className="file-input file-input-bordered file-input-success w-full"
            />
          </div>
        </div>
        <input
          className="btn btn-block mt-7 hover:bg-green-500 bg-green-600 text-white"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;
