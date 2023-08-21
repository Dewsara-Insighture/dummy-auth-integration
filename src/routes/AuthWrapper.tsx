import { Auth } from 'aws-amplify';
import { useEffect , useState} from 'react';
import { useNavigate,  Route, Routes , Navigate } from 'react-router-dom';
import {PropsWithChildren} from 'react'

export default function AuthWrapper({children} :PropsWithChildren){
    const [user , setUser] = useState<object>({});
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
                setUser(user);
                //navigate('/dashboard');
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
         <Routes>
          <Route
            path="/*"
            element={(
              <>
                {user ? (
                  {children}
                ) : (
                  <Navigate to="/login"  />
                )}
              </>            
            )
            }
          />
        </Routes>       
        </>
      )
}

