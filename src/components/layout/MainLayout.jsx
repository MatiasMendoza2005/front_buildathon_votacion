import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom'; // Importa Outlet

const MainLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto ml-64 p-6">
        <Outlet /> {/* Esto es crucial para mostrar el contenido */}
      </div>
    </div>
  );
};

export default MainLayout;