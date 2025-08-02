import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  FiMenu,
  FiFileText,
  FiUsers,
  FiUser,
  FiClock,
  FiLogOut
} from 'react-icons/fi';
import logo from '../../assets/images/logo1.png'; // Importa el logo

const Sidebar = () => {
  const { logout } = useAuth();

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-gray-100 shadow-lg flex flex-col">
      {/* Contenido superior de la sidebar */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 border-b border-gray-700 flex flex-col items-center">
          {/* Agrega el logo aquí */}
          <img 
            src={logo} 
            alt="DecideComunidad Logo" 
            className="w-16 h-16 mb-3 object-contain" 
          />
          <h1 className="text-xl font-bold text-white">DecideComunidad</h1>
          <p className="text-sm text-gray-400">Admin Panel</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-1">
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700/50 hover:text-white'
                  }`
                }
              >
                <FiMenu className="w-5 h-5 mr-3" />
                Estadísticas
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/requests" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700/50 hover:text-white'
                  }`
                }
              >
                <FiFileText className="w-5 h-5 mr-3" />
                Solicitudes
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/communities" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700/50 hover:text-white'
                  }`
                }
              >
                <FiUsers className="w-5 h-5 mr-3" />
                Comunidades
              </NavLink>
            </li>
            
            <li>
              <NavLink 
                to="/users" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700/50 hover:text-white'
                  }`
                }
              >
                <FiUser className="w-5 h-5 mr-3" />
                Usuarios
              </NavLink>
            </li>

            <li>
              <NavLink 
                to="/logs" 
                className={({ isActive }) => 
                  `flex items-center p-3 rounded-lg transition-colors ${
                    isActive ? 'bg-gray-700 text-white' : 'hover:bg-gray-700/50 hover:text-white'
                  }`
                }
              >
                <FiClock className="w-5 h-5 mr-3" />
                Histórico
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Sección inferior fija con el botón de logout */}
      <div className="p-4 border-t border-gray-700">
        <button 
          onClick={logout}
          className="flex items-center w-full p-3 rounded-lg hover:bg-gray-700 text-red-400 hover:text-red-300 transition-colors"
        >
          <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default Sidebar;