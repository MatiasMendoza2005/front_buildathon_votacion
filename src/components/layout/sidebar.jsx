// src/components/layout/Sidebar.jsx
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white shadow-lg">
      <div className="p-4 border-b border-gray-700">
        <h1 className="text-xl font-bold">DecideComunidad</h1>
        <p className="text-sm text-gray-400">Admin Panel</p>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          <li>
            <NavLink 
              to="/dashboard" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Dashboard
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/requests" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              Solicitudes
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/communities" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Comunidades
            </NavLink>
          </li>
          
          <li>
            <NavLink 
              to="/users" 
              className={({ isActive }) => 
                `flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-blue-600' : 'hover:bg-gray-700'}`
              }
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              Usuarios
            </NavLink>
          </li>
          
          <li className="border-t border-gray-700 pt-2 mt-4">
            <button 
              onClick={logout}
              className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 text-red-400 hover:text-red-300 transition-colors"
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;