import { useContext, useState } from "react";
import navLogo from "../assets/Icon/awesomeIconTwo.png";
import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { AuthContext } from "./Context";
import Container from "../container/Container";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => {});
  };

  return (
    <div className="bg-green-900 border-b-2 border-green-300 sticky top-0 z-50 md:h-[90px] h-[50px] w-full flex items-center justify-between">
      <Container>
        <div className=" flex md:h-[90px] h-[50px] items-center justify-between w-[1280px] px-6">
          <div
            onClick={() => setOpen(!open)}
            className="text-white flex justify-between items-center w-full md:hidden"
          >
            <span>
              {!open ? (
                <>
                  <FaBars />
                </>
              ) : (
                <span className="text-2xl">
                  <FaAngleLeft />
                </span>
              )}
            </span>
            {/* {!open ? (
              <div className="md:hidden">
                <h1 className="text-white font-semibold text-lg">
                  PhotoAwesome
                </h1>
              </div>
            ) : (
              <img className="w-12 mr-3" src={navLogo} alt="" />
            )} */}
          </div>
          <div
            className={`md:flex ${
              !open
                ? "hidden"
                : "bg-green-900 absolute md:static top-16 left-0 md:top-0 p-5 md:p-0 z-50"
            } w-full items-center justify-center`}
          >
            <div className="md:flex-1 flex">
              <img className="w-16 mr-3" src={navLogo} alt="" />
              <h1 className="text-white font-semibold">
                <span className="text-2xl font-bold text-green-500">PHOTO</span>
                Awesome
              </h1>
            </div>
            <div className="text-white md:flex items-center">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mx-4 block my-3 md:my-0 py-1 px-2 border-b border-green-500"
                    : "py-1 text-gray-300 block my-3 md:my-0 px-2 mx-4"
                }
                to="/"
              >
                Home
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mx-4 block my-3 md:my-0 py-1 px-2 border-b border-green-500"
                    : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
                }
                to="/alltoys"
              >
                Instructors
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-green-500 mx-4 block my-3 md:my-0 py-1 px-2 border-b border-green-500"
                    : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
                }
                to="/classes"
              >
                Classes
              </NavLink>

              {user && (
                <>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-500 mx-4 py-1 px-2 my-3 md:my-0 border-b block bgreenorange-500"
                        : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
                    }
                    to="/addtoy"
                  >
                    Dashboard
                  </NavLink>
                </>
              )}

              {!user && (
                <NavLink className="ml-4" to="/login">
                  <button className="mx-4 btn mt-4 md:mt-0 bg-green-500 text-white border-none hover:text-green-500">
                    Login
                  </button>
                </NavLink>
              )}
            </div>
            {user && (
              <div className="mx-4 md:mx-0">
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div
                      title={user?.displayName}
                      className="w-10 rounded-full"
                    >
                      <img src={user?.photoURL} />
                    </div>
                  </label>
                </div>
              </div>
            )}
            {user && (
              <div>
                <button
                  onClick={handleLogOut}
                  className="mx-4 btn mt-4 md:mt-0 bg-green-500 text-white border-none hover:text-green-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
