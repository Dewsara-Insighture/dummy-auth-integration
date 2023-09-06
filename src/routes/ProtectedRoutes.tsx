import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  component: React.ReactNode;
}

const isAuthenticated = /* Check if the user is authenticated */ true;
const hasCompletedSteps = /* Check if the user has completed necessary steps */ true;

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ component }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!hasCompletedSteps) {
    return <Navigate to="/create-organization" />;
  }

  return <>{component}</>;
};

export default ProtectedRoutes;