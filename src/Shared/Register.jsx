import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLoginIcon from "../assets/Icon/GoogleLogin.png";
import { AuthContext } from "./Context";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser, updateData, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      setError("Retype password not match");
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result);
        updateData(data.name, data.photo)
          .then((result) => {
            const users = {
              name: data.name,
              email: data.email,
              image: data.photo,
              status: "Student",
            };
            axios.post("http://localhost:5000/users", users).then((res) => {
              if (res.data.insertedId) {
                // alert('added sucess users')
              }
            });
          })
          .catch((error) => {});
        toast.success("Successfully Registerd ! Please login now");
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleRegister = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const saveUser = {
          name: user.displayName,
          email: user.email,
          image: user.photoURL,
          status: "Student",
        };
        axios.post("http://localhost:5000/users", saveUser).then((res) => {
          if (res.data.insertedId) {
            // alert('success')
          }
        });
        toast.success("Successfully Registerd ! Please login now");
        navigate("/login");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Helmet><title>Register | Photo Awesome</title></Helmet>
      <div className="bg-gray-900 border-2 border-gray-300 w-2/5 p-8 rounded-xl shadow-xl">
        <h1 className="text-center font-bold text-xl text-orange-500 mb-5">
          Register Please
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label htmlFor="name">
              <span className="text-orange-500 font-semibold ml-2">Name</span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-transparent focus:outline-none focus:bg-orange-100 focus:bg-opacity-30 text-white border-b-2 border-orange-500 mb-4 my-2"
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter Your Name"
            />
          </div>

          <div className="w-full">
            <label htmlFor="email">
              <span className="text-orange-500 font-semibold ml-2">Email</span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-transparent focus:outline-none focus:bg-orange-100 focus:bg-opacity-30 text-white border-b-2 border-orange-500 mb-4 my-2"
              type="email"
              {...register("email", { required: true })}
              id=""
              placeholder="Enter Your Email"
            />
          </div>

          <div className="w-full">
            <label htmlFor="password">
              <span className="text-orange-500 font-semibold ml-2">
                Password
              </span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-transparent focus:outline-none focus:bg-orange-100 focus:bg-opacity-30 text-white border-b-2 border-orange-500 mb-4 my-2"
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                pattern: /[A-Z]/,
              })}
              id=""
              placeholder="Enter Your Password"
            />
            {errors.password?.type === "minLength" && (
              <p className="text-red-600">
                {"password is less than 6 characters"}
              </p>
            )}

            {errors.password?.type === "pattern" && (
              <p className="text-red-600">
                {"password don't have a capital letter"}
              </p>
            )}
          </div>
          <div className="w-full">
            <label htmlFor="password">
              <span className="text-orange-500 font-semibold ml-2">
                Confirm Password
              </span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-transparent focus:outline-none focus:bg-orange-100 focus:bg-opacity-30 text-white border-b-2 border-orange-500 mb-4 my-2"
              type="password"
              {...register("confirmPassword")}
              id=""
              placeholder="Retype Password"
            />
          </div>

          <div className="w-full">
            <label htmlFor="photoURL">
              <span className="text-orange-500 font-semibold ml-2">
                photoURL
              </span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 bg-transparent focus:outline-none focus:bg-orange-100 focus:bg-opacity-30 text-white border-b-2 border-orange-500 mb-4 my-2"
              type="url"
              {...register("photo")}
              id=""
              placeholder="Enter Your photoURL"
            />
          </div>

          <div className="w-full">
            <input
              className="h-12 bg-orange-500 mt-5 font-semibold text-lg btn-block rounded-full"
              type="submit"
              value="Register"
            />
          </div>
          <p className="mt-2 text-white text-right">
            Already Have An Account?
            <Link to="/login" className="text-blue-500 underline">
              Login
            </Link>
          </p>
        </form>
        <div
          onClick={handleGoogleRegister}
          className="flex hover:bg-gray-200 items-center justify-center bg-gray-100 border-2 border-gray-400 rounded-full mt-7 cursor-pointer py-3 px-4"
        >
          <img className="w-6" src={googleLoginIcon} alt="" />
          <span className="ml-2 text-black font-bold">
            Register With Google
          </span>
        </div>
        <p className="text-red-500 text-center mt-3">{error}</p>
      </div>
    </div>
  );
};

export default Register;
