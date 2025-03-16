import { Navigate } from 'react-router-dom';
import { useUser } from '../../Store/UserContext';

const ProtectedRoute = ({ children, redirectTo }) => {
  const { token } = useUser();
  
  return token ? children : <Navigate to={redirectTo} />;
};

export default ProtectedRoute;