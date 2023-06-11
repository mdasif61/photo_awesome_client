import { useContext, useEffect, useState } from "react";
import navLogo from "../assets/Icon/awesomeIconTwo.png";
import { NavLink } from "react-router-dom";
import { FaAngleLeft, FaBars } from "react-icons/fa";
import { AuthContext } from "./Context";
import Container from "../container/Container";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Navbar = () => {

  const [theme,setTheme]=useState(localStorage.getItem('theme')?localStorage.getItem('theme'):'dark')

  useEffect(()=>{
    localStorage.setItem('theme',theme)
    const currentTheme=localStorage.getItem('theme');
    document.querySelector('html').setAttribute('data-theme', currentTheme)
  },[theme])

  const handleMode=(e)=>{
    if(e.target.checked){
      setTheme('dark')
    }
    else{
      setTheme('light')
    }
  }

  const { logOut, user } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructor();

  const handleLogOut = () => {
    logOut()
      .then((result) => { })
      .catch((error) => { });
  };

  return (
    <div className="bg-green-900 border-b-2 border-green-300 sticky top-0 z-50 md:h-[90px] h-[50px] w-full flex items-center justify-between">
      <Container>
        <div className=" flex md:h-[90px] h-[50px] items-center justify-between w-[1280px]">
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
            className={`md:flex ${!open
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
                to="/instructor"
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
                  {isAdmin && (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-500 mx-4 py-1 px-2 my-3 md:my-0 border-b block bgreenorange-500"
                          : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
                      }
                      to={`/dashboard/manageClass`}
                    >
                      Dashboard
                    </NavLink>
                  )}
                  {isInstructor && (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-500 mx-4 py-1 px-2 my-3 md:my-0 border-b block bgreenorange-500"
                          : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
                      }
                      to={`/dashboard/addClass`}
                    >
                      Dashboard
                    </NavLink>
                  )}
                  {!isInstructor && !isAdmin && (
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-green-500 mx-4 py-1 px-2 my-3 md:my-0 border-b block bgreenorange-500"
                          : "py-1 text-gray-300 px-2 my-3 md:my-0 mx-4 block"
                      }
                      to={`/dashboard/selectClass`}
                    >
                      Dashboard
                    </NavLink>
                  )}
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

            {/* mode change start */}
            <label className="swap swap-rotate">
              <input type="checkbox" onChange={handleMode} />
              <svg className="swap-on mr-2 text-white fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

              <svg className="swap-off mr-2 text-white fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
            </label>
            {/* mode change end */}

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
                  className="ml-4 btn mt-4 md:mt-0 bg-green-500 text-white border-none hover:text-green-500"
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
