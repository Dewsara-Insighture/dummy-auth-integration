import { Auth } from 'aws-amplify';
import { useEffect , useState} from 'react';
import { useNavigate,  Route, Routes , Navigate } from 'react-router-dom';
import {PropsWithChildren} from 'react'
import Container from '../components/baseAuthComponent/Container';

export default function AuthWrapper({children} :PropsWithChildren){
    const [user , setUser] = useState<object>({});
    const navigate = useNavigate()
    useEffect(() => {
        //console.log('hellow world')
        Auth.currentAuthenticatedUser({
          bypassCache: false,
        })
          .then((user) => {
            // if user already has logged in before suppose to get user object & set it to global state
            if(user){
                console.log('hiting Auth if:- '  , user);
                setUser(user);
                //navigate('/dashboard');
            }else{
                console.log('hiting Auth else:- '  , user);
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
         <Routes>
          <Route
            path="/*"
            element={(
              <>
                {user ? (
                  <Container />
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

