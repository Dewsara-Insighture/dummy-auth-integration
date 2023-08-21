import { Auth } from 'aws-amplify';
import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Container(children : PropsWithChildren) {
  const navigate = useNavigate()
 
  useEffect(() => {
    console.log('hellow world')
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then((user) => {
        // if user already has logged in before suppose to get user object & set it to global state
        if(user){
            console.log('hiting Container if:- '  , user);
            navigate('/dashboard');
        }else{
            console.log('hiting Container else:- '  , user);
            navigate('/login');
        }
      })
      .catch((err) => {
       console.log('error:- ' , err);
       navigate('/login');
      });
  }, []);

  return(
    <>
      {children}
        <h2>Stil in the container console</h2>
    </>
  )

}