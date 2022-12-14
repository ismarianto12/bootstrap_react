import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRoute = ({
  redirectPath = '/login',
  children,
}) => {
  const user = localStorage.getItem("mytime") ? localStorage.getItem("mytime") : []
  console.log(user == 0)
  if (user == 0) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;