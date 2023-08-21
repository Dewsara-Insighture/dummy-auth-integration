import { Auth } from 'aws-amplify';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {PropsWithChildren} from 'react'



export default function Container({children} :PropsWithChildren) {
  const navigate = useNavigate()
 
  useEffect(() => {
    console.log('hellow world')
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        // if user already has logged in before suppose to get user object & set it to global state
        if(user){
            console.log('hiting User if:- '  , user);
            navigate('/dashboard');
        }else{
            console.log('hiting User else:- '  , user);
            navigate('/login');
        }
      })
      .catch((err) => {
       console.log('error:- ' , err.message);
       navigate('/login');
      });
  }, []);

  return(
    <>
        {children}
        <p>loading</p>
    </>
  )

}