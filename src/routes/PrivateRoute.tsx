//This contains the routes which requires user login
import { Dashboard } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';
import CreateOrganization from '../pages/create-organization/CreateOrganization';
import AuthWrapper from './AuthWrapper';

export default function PrivateRoutes() {
  return (
    <Routes>
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
      <Route
        key="dashboard"
        path="/dashboard/teams"
        element={
          <AuthWrapper>
            <Dashboard />
          </AuthWrapper>
        }
      />
      <Route
        key="dashboard"
        path="/dashboard/project"
        element={
          <AuthWrapper>
            <Dashboard />
          </AuthWrapper>
        }
      />
      
    </Routes>
  );
}
