import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import googleLoginIcon from "../assets/Icon/GoogleLogin.png";
import toast from "react-hot-toast";
import { AuthContext } from "./Context";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const { handleSubmit, register } = useForm();
  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        console.log(result);
        toast.success("Successfully logged");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result);
        toast.success("Successfully logged!");
        navigate(from);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-900 border-2 border-gray-300 w-2/5 p-8 rounded-xl shadow-xl">
        <h1 className="text-center text-orange-600 font-bold text-xl mb-5">
          Login Please
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full">
            <label htmlFor="email">
              <span className="text-orange-600 font-semibold ml-2">Email</span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 focus:outline-none border-b-2 border-orange-500 bg-transparent focus:bg-orange-100 focus:bg-opacity-40 text-white mb-4 my-2"
              type="email"
              {...register("email")}
              id=""
              placeholder="Enter Your Email"
            />
          </div>

          <div className="w-full relative">
            <label htmlFor="password">
              <span className="text-orange-600 font-semibold ml-2">
                Password
              </span>
            </label>
            <br />
            <input
              className="w-full h-12 py-2 px-4 focus:outline-none border-b-2 border-orange-500 bg-transparent focus:bg-orange-100 focus:bg-opacity-40 text-white mb-4 my-2"
              type={`${show?"text":"password"}`}
              {...register("password")}
              id=""
              placeholder="Enter Your Password"
            />
            <span onClick={()=>setShow(!show)} className="text-gray-400 top-12 right-5 absolute">
              {
                show?<FaEye />:<FaEyeSlash></FaEyeSlash>
              }
            </span>
          </div>
          <div className="w-full">
            <input
              className="h-12 bg-orange-500 mt-5 font-semibold text-lg btn-block rounded-full"
              type="submit"
              value="Login"
            />
          </div>
          <p className="mt-2 text-white text-right">
            Are You New?
            <Link to="/register" className="text-blue-500 underline">
              Register
            </Link>
          </p>
        </form>
        <div
          onClick={handleGoogleLogin}
          className="flex hover:bg-gray-200 items-center justify-center bg-gray-100 border-2 border-gray-400 rounded-full mt-7 cursor-pointer py-3 px-4"
        >
          <img className="w-6" src={googleLoginIcon} alt="" />
          <span className="ml-2 text-black font-bold">Login With Google</span>
        </div>
        <p className="text-red-500 mt-3 text-center">{error}</p>
      </div>
    </div>
  );
};

export default Login;
