import { useEffect, useState } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getUserAccessToken } from '../utils/getUserToken';
import { AuthService } from '../api/api';

// interface OnBoardedRoutesProps {
//   component?: React.ReactNode;
// }

export default function OnBoardedRoutes() {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [hasCompletedSteps, setHasCompletedSteps] = useState(false);

  useEffect(() => {
    // Simulate an API call to check user authentication status
    // Replace this with your actual API call logic
    const onBoardingCheck = async () => {
      try {
        const authenticated = await getUserAccessToken();

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
            console.log('hitting this if');
            setHasCompletedSteps(false);
          } else {
            //This as a jump over. Not actually a good thing to do.
            console.log('hitting this else');
            setHasCompletedSteps(true);
          }
        }
      } catch (error) {
        console.log('Auth Wrapper error:- ', error);
      } finally {
        setIsLoading(false);
      }
    };

    onBoardingCheck();
  }, [pathname]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return hasCompletedSteps ? (
    <Outlet />
  ) : (
    <Navigate to="/create-organization" replace />
  );
}
