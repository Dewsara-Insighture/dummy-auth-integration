import { Auth } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '../components/baseAuthComponent/Container';
import { AuthService } from '../api/api';
// import { organizationType } from '../types/organization.types';

export default function AuthWrapper({ children }: PropsWithChildren) {
  //const TRUE_CONST: boolean = true;
  const [loading, setLoading] = useState<boolean>(true);
  const [isOnboarded, setIsOnboarded] = useState<boolean>(false);
  const [userData, setUserData] = useState<object | null>({});

  useEffect(() => {

    const authUser = async () => {
      try{
        const authenticated = await Auth.currentAuthenticatedUser({bypassCache : true});
        if(authenticated){          
          const onboardingOrgs = await AuthService.get('/users/orgData',{headers:{Authorization : `Bearer ${authenticated.signInUserSession.accessToken.jwtToken}`}});
          console.log('Onboarding Data :- ' , onboardingOrgs)
          if(onboardingOrgs?.data?.data?.orgData && onboardingOrgs?.data?.data?.orgData.length === 0){
            setIsOnboarded(false);
          }else{
            //This as a jump over. Not actually a good thing to do. 
            setIsOnboarded(true);
          }
          setLoading(false);
          setUserData(authenticated);
        }else{
          console.log('hiting Container else:- ', authenticated);
          setLoading(false);
          setUserData(null);
        }
      }catch(error){
        console.log('Auth Wrapper error:- ', error);
        setLoading(false);
        setUserData(null);
      }
     
    };

    authUser();
  }, []);

  if (loading) {
    return <CircularProgress />;
  } else {
    return (
      <>
        <Routes>
          <Route
            path="/*"
            element={
              <>
                {!userData || userData === null ? (
                  <>
                    {console.log(
                      'hit login :-0 ',
                      !userData || userData === null
                    )}
                    <Navigate to="/login" />
                  </>
                ) : userData && isOnboarded === false ? (
                  <>
                    {console.log(
                      `hit create-organization :- ${ userData && isOnboarded === false} & isOnboarded(${isOnboarded})`
                    )}
                    <Navigate to="/create-organization" />
                  </>
                ) : (
                  userData &&
                  isOnboarded === true && (
                    <>
                      {console.log(
                        'hit Container :-0 ',
                        userData && isOnboarded === true
                      )}
                      <Container />
                    </>
                  )
                )}
              </>
            }
          />
        </Routes>
        {children}
      </>
    );
  }
}
