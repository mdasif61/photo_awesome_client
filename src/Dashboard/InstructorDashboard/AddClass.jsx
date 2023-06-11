import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Shared/Context";
import { Helmet } from "react-helmet-async";

const image_token = import.meta.env.VITE_UPLOAD_IMAGE;

const AddClass = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext)
  const [addLoading, setAddLoading] = useState(false);
  const {
    handleSubmit,
    register,
    reset
  } = useForm();
  const onSubmit = (data) => {
    const hosting_images_url = `https://api.imgbb.com/1/upload?key=${image_token}`;
    setAddLoading(true);
    const formData = new FormData();
    formData.append("image", data.photo[0]);
    fetch(hosting_images_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageRes) => {
        if (imageRes.success) {
          const imageURL = imageRes.data.display_url;
          const { name, instructor, email, price, seats } = data;
          const addClass = {
            name,
            instructor,
            email,
            price: parseFloat(price),
            seats: parseInt(seats),
            image: imageURL,
            status: "Pending",
            total_enroll: 0,
          };
          axiosSecure.post("/classes", addClass).then((data) => {
            if (data.data.insertedId) {
              reset()
              Swal.fire("Successfull Added Class", "success");
              setAddLoading(false);
            }
          });
        }
      });
  };

  return (
    <div className="w-8/12 mx-auto">
      <Helmet><title>Add A Class | Photo Awesome</title></Helmet>
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
              {...register("name", { required: true })}
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
              defaultValue={user?.displayName}
              readOnly
              placeholder="Instructor Name"
              {...register("instructor", { required: true })}
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
              defaultValue={user?.email}
              readOnly
              placeholder="Instructor Email"
              {...register("email")}
            />
          </div>

          <div className="w-full">
            <label htmlFor="seats">
              <span className="font-bold">Available Seats</span>
            </label>
            <br />
            <input
              className="w-full mt-2 focus:outline-none h-12 py-2 px-4 border focus:bg-green-100 focus:border-b-2 border-green-600 rounded"
              type="number"
              id=""
              placeholder="Enter Available Seats"
              {...register("seats")}
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
              {...register("price")}
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
              {...register("photo")}
            />
          </div>
        </div>
        <input
          disabled={addLoading}
          className="btn btn-block mt-7 hover:bg-green-500 bg-green-600 text-white"
          type="submit"
          value={`${addLoading ? 'Class Adding...' : 'Add Class'}`}
        />
      </form>
    </div>
  );
};

export default AddClass;
