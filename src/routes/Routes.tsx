import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/auth/SignUp';
import ErrorPage404 from '../pages/404/404';
// import AuthWrapper from './AuthWrapper';
import Dashboard from '../pages/dashboard/Dashboard';
import ConfirmInvitation from '../pages/confirm-invitation/ConfirmInvitation';
//import Container from '../components/baseAuthComponent/Container';
import SignIn from '../pages/auth/SignIn';
// import AuthWrapper from './AuthWrapper';
import CreateOrganization from '../pages/create-organization/CreateOrganization';
import InviteMembers from '../pages/invite-members/InviteMembers';
import ProtectedRoutes from './ProtectedRoutes';
import OnBoardedRoutes from './OnBoardedRoutes';

export default function AppRoutes() {
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          key="confirm-invitation"
          path="/confirm-invitation"
          element={<ConfirmInvitation />}
        />

        <Route
          key="invite-member"
          path="/invite-members"
          element={
         <AuthWrapper>
              <InviteMembers />
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
        <Route
          key="dashboard"
          path="/dashboard/*"
          element={
            <AuthWrapper>
              <Dashboard />
            </AuthWrapper>
          }
        />

        <Route path="/404" element={<ErrorPage404 />} />
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/*" element={<Navigate to="/404" />} /> */}
        <Route path="login" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          key="confirm-invitation"
          path="confirm-invitation"
          element={<ConfirmInvitation />}
        />

        <Route path="/" element={<ProtectedRoutes />}>
          <Route path="create-organization" element={<CreateOrganization />} />
          <Route path="invite-members" element={<InviteMembers />} />
          <Route path="/" element={<OnBoardedRoutes />}>
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="/" element={<Navigate to="dashboard" />} />
          </Route>
          
        </Route>

        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </>
  );
}
