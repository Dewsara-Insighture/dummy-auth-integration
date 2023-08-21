import { Route, Routes } from 'react-router-dom';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ErrorPage404 from '../pages/404/404';
// import AuthWrapper from './AuthWrapper';
import Dashboard from '../pages/dashboard/Dashboard';
import ConfirmInvitation from '../pages/confirm-invitation/ConfirmInvitation';
// import CreateOrganization from '../pages/create-organization/CreateOrganization';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          key="confirm-invitation"
          path="/confirm-invitation"
          element={<ConfirmInvitation />}
        />
        <Route
          key="dashboard"
          path="/dashboard/*"
          element={<Dashboard />}
        />
        {/* <Route
          path="/dashboard/*"
          element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          }
        />
        <Route
          key="create-org"
          path="/create-organization"
          element={
            <AuthWrapper>
              <CreateOrganization />
            </AuthWrapper>
          }
        />
         <Route path="/" element={<Navigate to='dashboard' />} /> */}
        <Route path="/*" element={<ErrorPage404 />} />
      </Routes>
      {/* <PublicRoutes /> */}
      {/* <PrivateRoutes /> */}
    </>
  );
}
