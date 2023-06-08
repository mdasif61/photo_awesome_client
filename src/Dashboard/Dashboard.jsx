import { Link, Outlet } from "react-router-dom";
import dashboardLogo from "../assets/Icon/awesomeIconOne.png";
import "../Css/Dashboard.css";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";

const Dashboard = () => {

  // const isAdmin = true;
  const { isAdmin } = useAdmin()
  const { isInstructor } = useInstructor()

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bgUl bg-base-200 text-base-content">
          <Link to='/'>
            <li>
              <img className="mb-5" src={dashboardLogo} alt="" />
            </li>
          </Link>
          {
            isAdmin && <>
              <li>
                <Link to='/dashboard/manageClass'>Manage Class</Link>
              </li>
              <li>
                <Link to='/dashboard/manageUsers'>Manage Users</Link>
              </li>
            </>
          }
          {
            isInstructor && <>
              <li>
                <Link to='/dashboard/addClass'>Add A Class</Link>
              </li>
              <li>
                <Link to='/dashboard/myClass'>My Classes</Link>
              </li>
            </>
          }
          {
            !isInstructor && !isAdmin && <>
            <li>
              <Link to='/dashboard/selectClass'>My Selected Class</Link>
            </li>
            <li>
              <Link to='/dashboard/enrolledClass'>My Enrolled Class</Link>
            </li>
            </>
          }
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
