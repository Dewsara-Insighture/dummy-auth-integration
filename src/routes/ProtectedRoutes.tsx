import React, { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getUserAccessToken } from '../utils/getUserToken';

interface ProtectedRouteProps {
  component?: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = () => {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate an API call to check user authentication status
    // Replace this with your actual API call logic
    const authUser = async () => {
      try {
        const authenticated = await getUserAccessToken();
        setIsAuthenticated(!!authenticated);
      } catch (error) {
        console.log('Auth Wrapper error:- ', error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    authUser();
  }, [pathname]);

  if (isLoading) {
    // You can render a loading indicator here if needed
    return <p>Loading...</p>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;

  //   if (isAuthenticated && !hasCompletedSteps) {
  //     console.log('navigate to create organization :- ' ,!hasCompletedSteps )

  //     // navigate('/create-organization')
  //     return <Navigate to='/create-organization' replace />;
  //   }

  //   return <>{component}</>;
};

export default ProtectedRoutes;
