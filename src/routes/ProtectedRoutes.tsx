import {PropsWithChildren} from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';


export default function ProtectedRoute( {children} :PropsWithChildren) {
    const addingTrue: boolean = true;

    return (
      <>
        <Routes>
          {/* <Route
            path="/*"
            element={
              <>{addingTrue ? {children} : <Navigate to="/login" />}
                
              </>
              
            }
          /> */}
        </Routes>
      </>
    );
}

