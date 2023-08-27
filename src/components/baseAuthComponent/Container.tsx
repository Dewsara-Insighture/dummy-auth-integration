
import PrivateRoutes from '../../routes/PrivateRoute';
// import { Navigate } from 'react-router-dom';
// import { Auth } from 'aws-amplify';
// import { useEffect, useState } from 'react';
// import CircularProgress from '@mui/material/CircularProgress';


export default function Container() {
  // const [loading , setLoading] = useState<boolean>(true);
  // const [userData , setUserData] = useState<object | null>({});
 
  // useEffect(() => {
  //   console.log('hellow world')
  //   Auth.currentAuthenticatedUser({
  //     bypassCache: false,
  //   })
  //     .then((user) => {
  //       // if user already has logged in before suppose to get user object & set it to global state
  //       if(user){
  //           console.log('hiting Container if:- '  , user);
  //           setLoading(false);
  //           setUserData(user);

  //       }else{
  //           console.log('hiting Container else:- '  , user);
  //           setLoading(false);
  //           setUserData(null);
  //       }
  //     })
  //     .catch((err) => {
  //      console.log('error:- ' , err);
  //      setLoading(false);
  //      setUserData(null);
  //     });
  // }, []);

  return(
    <>
      {/* {loading && 
        <>
        {console.log('Hitting Loading:- ' , loading)}
            <CircularProgress />
        </>
       
      }
      {
        (!loading && userData !== null ) && 
        <>
           {console.log('Hitting Private Route:- ' , !loading && userData !== null )}
           <PrivateRoutes />
        </>
       
      }
      {
        (!loading && userData === null) && 
        <>
           {console.log('Hitting Navigate:- ' , !loading && userData === null )}
           <Navigate to = '/login' />
        </>
        
      } */}
      <PrivateRoutes />
    </>
  )

}