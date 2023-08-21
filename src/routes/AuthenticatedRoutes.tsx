//Not using at the moment

import { Dashboard } from '@mui/icons-material';
import { Routes, Route } from 'react-router-dom';


export default function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route key="dashboard" path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
