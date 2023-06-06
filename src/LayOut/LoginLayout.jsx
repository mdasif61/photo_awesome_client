import { Outlet } from "react-router-dom";
import Container from "../container/Container";

const LoginLayout = () => {
  return (
    <div>
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default LoginLayout;
