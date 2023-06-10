import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Shared/Context";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const image_token = import.meta.env.VITE_UPLOAD_IMAGE;

const UpdateClass = () => {
  const [updateData, setUpdateData] = useState({});
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [addLoading, setUpdateLoading] = useState(false);
  const { handleSubmit, register, reset } = useForm();

  const { id } = useParams();
  useEffect(() => {
    axiosSecure.get(`/updateClass/${id}`).then((res) => {
      setUpdateData(res.data);
    });
  }, [axiosSecure, id]);

  const onSubmit = (data) => {
    const hosting_images_url = `https://api.imgbb.com/1/upload?key=${image_token}`;

    setUpdateLoading(true);

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
          const { name, price, seats } = data;
          const addClass = {
            name,
            price:parseFloat(price),
            seats:parseInt(seats),
            image: imageURL
          };
          axiosSecure.patch(`/myclassUpdate/${id}`, addClass).then((data) => {
            if (data.data.modifiedCount>0) {
              reset();
              Swal.fire("Successfull Update", "success");
              setUpdateLoading(false);
            }
          });
        }
      });
  };

  return (
    <div className="w-8/12 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <h1 className="text-2xl font-bold mb-10 uppercase text-center">
          Update Your Class
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
              defaultValue={updateData.name}
              placeholder="Enter Your Class Name"
              {...register("name", { required: true })}
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
              defaultValue={updateData.seats}
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
              defaultValue={updateData.price}
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
          value={`${addLoading ? "Updating..." : "Update"}`}
        />
      </form>
    </div>
  );
};

export default UpdateClass;
