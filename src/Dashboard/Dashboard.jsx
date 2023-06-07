import { Link, Outlet } from "react-router-dom";
import Container from "../container/Container";
import dashboardLogo from '../assets/Icon/awesomeIconTwo.png';
import '../Css/Dashboard.css'


const Dashboard = () => {
  return (
    <div>
      <Container>
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
            <ul className="menu p-4 w-80 h-full bgUl text-base-content">
              <li><img src={dashboardLogo} alt="" /></li>
              <li>
                <Link>Add A Class</Link>
              </li>
              <li>
                <Link>My Classes</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
