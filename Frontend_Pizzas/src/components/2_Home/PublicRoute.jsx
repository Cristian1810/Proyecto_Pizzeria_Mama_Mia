import { Navigate } from 'react-router-dom';
import { useUser } from '../../Store/UserContext';

const PublicRoute = ({ children, redirectTo }) => {
  const { token } = useUser();
  return token ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;