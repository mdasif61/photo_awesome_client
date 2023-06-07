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
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h1 className="text-2xl font-bold mb-10 uppercase text-center">
          Add Your Class
        </h1>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 gap-5">
          <div className="w-full">
            <label htmlFor="className">
              <span className="font-bold">Class Name</span>
            </label>
            <br />
            <input
              className="w-full mt-2 focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="text"
              id=""
              placeholder="Enter Your Class Name"
              {...register('className',{required:true})}
            />
          </div>

          <div className="w-full">
            <label htmlFor="instructorName">
              <span className="font-bold">Instructor Name</span>
            </label>
            <br />
            <input
              className="w-full mt-2 focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="text"
              id=""
              placeholder="Instructor Name"
              {...register('name')}
            />
          </div>

          <div className="w-full">
            <label htmlFor="instructorEmail">
              <span className="font-bold">Instructor Email</span>
            </label>
            <br />
            <input
              className="w-full mt-2 focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="email"
              id=""
              placeholder="Instructor Email"
              {...register('email')}
            />
          </div>

          <div className="w-full">
            <label htmlFor="seat">
              <span className="font-bold">Available Seats</span>
            </label>
            <br />
            <input
              className="w-full mt-2 focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="number"
              id=""
              placeholder="Enter Available Seats"
              {...register('seats')}
            />
          </div>

          <div className="w-full">
            <label htmlFor="price">
              <span className="font-bold">Price</span>
            </label>
            <br />
            <input
              className="w-full mt-2 focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="text"
              id=""
              placeholder="Enter Price"
              {...register('price')}
            />
          </div>
          <div className="w-full">
            <label htmlFor="image">
              <span className="font-bold">Image</span>
            </label>
            <br />
            <input
              type="file"
              className="file-input mt-2 h-12 rounded file-input-bordered file-input-success w-full"
              {...register('photo')}
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
