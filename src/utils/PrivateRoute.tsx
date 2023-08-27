import { Navigate, Outlet, Route } from "react-router-dom";

interface PProps {
  children: React.ReactNode;
}

const PrivateRoute = () => {
  const auth = localStorage.getItem("info");
  return auth ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
