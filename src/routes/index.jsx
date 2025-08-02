import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Dashboard from '../pages/Dashboard';
import CommunityRequests from '../pages/CommunityRequests';
import Communities from '../pages/Communities';
import Users from '../pages/Users';
import Login from '../pages/Login';
import { AuthProvider } from '../context/AuthContext';
import Logs from '../pages/Logs';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Ruta pública sin layout */}
      <Route path="/login" element={<Login />} />
      
      {/* Rutas protegidas con layout */}
      <Route element={<MainLayout />}>
        <Route index element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="requests" element={<CommunityRequests />} />
        <Route path="communities" element={<Communities />} />
        <Route path="users" element={<Users />} />
        <Route path="logs" element={<Logs />} />
      </Route>
      
      {/* Ruta de fallback (opcional) */}
      <Route path="*" element={<div>404 - Página no encontrada</div>} />
    </Routes>
  );
};

export default AppRoutes;