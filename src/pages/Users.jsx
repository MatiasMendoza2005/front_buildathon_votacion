import { useState } from 'react';
import { 
  FiSearch, 
  FiUser, 
  FiMail, 
  FiPhone, 
  FiCheckCircle, 
  FiXCircle, 
  FiEdit2, 
  FiTrash2,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 'u1b2c3d4',
      name: 'María González',
      email: 'maria.g@example.com',
      phone: '+56912345678',
      identityVerified: true,
      walletAddress: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      status: 'active',
      communities: ['Barrio Las Acacias', 'Distrito Norte']
    },
    {
      id: 'e5f6g7h8',
      name: 'Carlos Mendoza',
      email: 'carlos.m@example.com',
      phone: '+56987654321',
      identityVerified: false,
      walletAddress: '0x842d35Cc6634C0532925a3b844Bc454e4438f44e',
      status: 'pending',
      communities: ['Condominio Vista Hermosa']
    },
    {
      id: 'i9j0k1l2',
      name: 'Ana Beltrán',
      email: 'ana.b@example.com',
      phone: '+56956781234',
      identityVerified: true,
      walletAddress: '0x942d35Cc6634C0532925a3b844Bc454e4438f44e',
      status: 'suspended',
      communities: ['Residencial Los Pinos', 'Distrito Central']
    }
  ]);

  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    verification: 'all'
  });

  const [expandedUser, setExpandedUser] = useState(null);

  const toggleExpand = (id) => {
    setExpandedUser(expandedUser === id ? null : id);
  };

  const handleStatusChange = (userId, newStatus) => {
    setUsers(users.map(user => 
      user.id === userId ? { ...user, status: newStatus } : user
    ));
  };

  const filteredUsers = users.filter(user => {
    return (
      (filters.status === 'all' || user.status === filters.status) &&
      (filters.verification === 'all' || 
       (filters.verification === 'verified' && user.identityVerified) ||
       (filters.verification === 'unverified' && !user.identityVerified)) &&
      (user.name.toLowerCase().includes(filters.search.toLowerCase()) ||
       user.email.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Usuarios</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 min-w-[200px]">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar usuarios..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </div>
          
          <select
            className="border border-gray-300 rounded-lg px-3 py-2"
            value={filters.status}
            onChange={(e) => setFilters({...filters, status: e.target.value})}
          >
            <option value="all">Todos los estados</option>
            <option value="active">Activos</option>
            <option value="pending">Pendientes</option>
            <option value="suspended">Suspendidos</option>
          </select>
          
          <select
            className="border border-gray-300 rounded-lg px-3 py-2"
            value={filters.verification}
            onChange={(e) => setFilters({...filters, verification: e.target.value})}
          >
            <option value="all">Toda verificación</option>
            <option value="verified">Verificados</option>
            <option value="unverified">No verificados</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
          <div className="col-span-3">Nombre</div>
          <div className="col-span-3">Contacto</div>
          <div className="col-span-2">Verificación</div>
          <div className="col-span-2">Estado</div>
          <div className="col-span-2">Acciones</div>
        </div>
        
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <div key={user.id} className="border-b border-gray-200 last:border-0">
              <div 
                className="grid grid-cols-12 p-4 items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleExpand(user.id)}
              >
                <div className="col-span-3 font-medium flex items-center gap-2">
                  <FiUser className="text-gray-500" /> {user.name}
                </div>
                <div className="col-span-3">
                  <div className="flex items-center gap-1 text-gray-600">
                    <FiMail className="text-sm" /> {user.email}
                  </div>
                  <div className="flex items-center gap-1 text-gray-600 text-sm mt-1">
                    <FiPhone className="text-sm" /> {user.phone}
                  </div>
                </div>
                <div className="col-span-2">
                  {user.identityVerified ? (
                    <span className="flex items-center gap-1 text-green-600">
                      <FiCheckCircle /> Verificado
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-yellow-600">
                      <FiXCircle /> No verificado
                    </span>
                  )}
                </div>
                <div className="col-span-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    user.status === 'active' ? 'bg-green-100 text-green-800' :
                    user.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {user.status === 'active' ? 'Activo' : 
                     user.status === 'pending' ? 'Pendiente' : 'Suspendido'}
                  </span>
                </div>
                <div className="col-span-2 flex justify-end">
                  {expandedUser === user.id ? 
                    <FiChevronUp className="text-gray-500" /> : 
                    <FiChevronDown className="text-gray-500" />}
                </div>
              </div>
              
              {expandedUser === user.id && (
                <div className="px-4 pb-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Wallet Address</h3>
                      <p className="text-gray-600 font-mono text-sm break-all">
                        {user.walletAddress}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Comunidades</h3>
                      <div className="flex flex-wrap gap-2">
                        {user.communities.map(community => (
                          <span key={community} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {community}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 justify-end">
                      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        <FiEdit2 /> Editar
                      </button>
                      {user.status === 'active' ? (
                        <button 
                          onClick={() => handleStatusChange(user.id, 'suspended')}
                          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                        >
                          <FiTrash2 /> Suspender
                        </button>
                      ) : (
                        <button 
                          onClick={() => handleStatusChange(user.id, 'active')}
                          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                          <FiCheckCircle /> Activar
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No se encontraron usuarios con los filtros actuales
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;