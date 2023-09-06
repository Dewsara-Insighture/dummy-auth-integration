import React, { useEffect, useState } from 'react';
import { Navigate , Outlet} from 'react-router-dom';
import { getUserAccessToken } from '../utils/getUserToken';
import { AuthService } from '../api/api';

interface ProtectedRouteProps {
  component?: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = () => {
//   const navigate =  useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasCompletedSteps, setHasCompletedSteps] = useState(false);

  useEffect(() => {
    // Simulate an API call to check user authentication status
    // Replace this with your actual API call logic
    const authUser = async () => {
      try {
        const authenticated = await getUserAccessToken();
        setIsAuthenticated(authenticated ? true : false);
        if (authenticated) {
          const onBoardingOrgs = await AuthService.get('/users/orgData', {
            headers: {
              Authorization: `Bearer ${authenticated}`,
            },
          });
          console.log('Onboarding Data :- ', onBoardingOrgs);

          if (
            onBoardingOrgs?.data?.data?.orgData &&
            onBoardingOrgs?.data?.data?.orgData.length === 0
          ) {
            console.log('hitting this if')
            setHasCompletedSteps(false);
          } else {
            //This as a jump over. Not actually a good thing to do.
            console.log('hitting this else')
            setHasCompletedSteps(true);
          }
          setIsLoading(false);
        } else {
          console.log('hiting Container else:- ', authenticated);
          setIsLoading(false);
        }
      } catch (error) {
        console.log('Auth Wrapper error:- ', error);
        setIsLoading(false);
        setIsAuthenticated(false);
      }
    };

    authUser();
  }, []);

  if (isLoading) {
    // You can render a loading indicator here if needed
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  } else if(isAuthenticated && !hasCompletedSteps){
    return <Navigate to='/create-organization' replace />
  } else{
    return <Outlet />
  }

//   if (isAuthenticated && !hasCompletedSteps) {
//     console.log('navigate to create organization :- ' ,!hasCompletedSteps )
    
//     // navigate('/create-organization')
//     return <Navigate to='/create-organization' replace />;
//   }

//   return <>{component}</>;
};

export default ProtectedRoutes;
