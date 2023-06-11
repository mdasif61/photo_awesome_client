import { Link, Outlet } from "react-router-dom";
import dashboardLogo from "../assets/Icon/awesomeIconOne.png";
import "../Css/Dashboard.css";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import Container from "../container/Container";
import { FaBook, FaClipboard, FaFolderMinus, FaHistory, FaPlusCircle, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  
  const { isAdmin } = useAdmin();
  const { isInstructor } = useInstructor();

  return (
    <div className="bg-green-50">
      <Container>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content p-10 flex flex-col items-center justify-center">
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
            <ul className="menu p-4 w-80 h-full bgUl bg-green-100 text-base-content">
              <Link to="/">
                <li>
                  <img className="mb-5" src={dashboardLogo} alt="" />
                </li>
              </Link>
              {isAdmin && (
                <>
                  <li className="text-lg font-semibold">
                    <Link to="/dashboard/manageClass"><FaFolderMinus/> Manage Class</Link>
                  </li>
                  <li className="text-lg font-semibold">
                    <Link to="/dashboard/manageUsers"><FaUsers/> Manage Users</Link>
                  </li>
                </>
              )}
              {isInstructor && (
                <>
                  <li className="text-lg font-semibold">
                    <Link to="/dashboard/addClass"><FaPlusCircle/> Add A Class</Link>
                  </li>
                  <li className="text-lg font-semibold">
                    <Link to="/dashboard/myClass"><FaFolderMinus/> My Classes</Link>
                  </li>
                </>
              )}
              {!isInstructor && !isAdmin && (
                <>
                  <li className="text-lg font-semibold">
                    <Link to="/dashboard/selectClass">
                      <FaBook /> My Selected Class
                    </Link>
                  </li>
                  <li className="text-lg font-semibold">
                    <Link to="/dashboard/enrolledClass">
                      <FaClipboard /> My Enrolled Class
                    </Link>
                  </li>
                  <li className="text-lg font-semibold">
                    <Link to="/dashboard/history">
                      <FaHistory /> Payment History
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
