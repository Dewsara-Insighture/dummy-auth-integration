import { Routes, Route} from 'react-router-dom';

import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
// import Welcome from '../pages/welcome/Welcome';
import Dashboard from '../pages/dashboard/Dashboard';
import ProtectedRoute from './ProtectedRoutes';
import CreateOrganization from '../pages/create-organization/CreateOrganization';
import ConfirmInvitation from '../pages/confirm-invitation/ConfirmInvitation';
import Container from '../components/baseAuthComponent/Container';

export default function BasicRoutes() {

  return (
    <Routes>
       <Route key="login" path="/" element={<Container />} />
      <Route key="login" path="/login" element={<SignIn />} />
      <Route key="signup" path="/signup" element={<SignUp />} />
      <Route key="forget-password" path="/forgetpassword" element={<Dashboard />} />
      <Route
        key="confirm-invitation"
        path="/confirm-invitation"
        element={
          <ProtectedRoute>
            <ConfirmInvitation />
          </ProtectedRoute>
        }
      />
      <Route
        key="create-org"
        path="/create-organization"
        element={<CreateOrganization />}
      />
      <Route
        key="dashboard"
        path="/dashboard"
        element={ <Dashboard />}
      />

{/* OLD METHOD */}
{/* <Route
        key="initial"
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      /> */}
    </Routes>
  );
}
