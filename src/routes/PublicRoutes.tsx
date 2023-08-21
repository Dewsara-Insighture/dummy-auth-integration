import { Dashboard } from '@mui/icons-material';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import PrivateRoutes from './PrivateRoute';
import ConfirmInvitation from '../pages/confirm-invitation/ConfirmInvitation';
import ErrorPage404 from '../pages/404/404';

export default function PublicRoutes() {
  return (
    <>
    <Routes>
      <Route key="init" path="/" element={<Container />} />
      <Route key="login" path="/login" element={<SignIn />} />
      <Route key="signup" path="/signup" element={<SignUp />} />
      <Route
        key="confirm-invitation"
        path="/confirm-invitation"
        element={
            <ConfirmInvitation />
        }
      />
      <Route
        key="forget-password"
        path="/forgetpassword"
        element={<Dashboard />}
      />
     
      <Route
        key="404"
        path="/*"
        element={<ErrorPage404 />}
      />
    </Routes>
    <PrivateRoutes />
    </>
    
  );
}
