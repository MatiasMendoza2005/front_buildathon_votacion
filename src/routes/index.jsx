import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
// Importa otras páginas aquí...

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Agrega más rutas según sea necesario */}
      <Route path="/" element={<h1>Página Principal</h1>} />
      <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
    </Routes>
  );
}