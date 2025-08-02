import { useState } from 'react';
import { FiSearch, FiUsers, FiMapPin, FiChevronDown, FiChevronUp, FiEdit, FiTrash2 } from 'react-icons/fi';

const CommunitiesPage = () => {
  const [communities, setCommunities] = useState([
    {
      id: 'a1b2c3d4',
      name: 'Barrio Las Acacias',
      description: 'Comunidad residencial en zona norte',
      location: 'Sector Norte',
      members: 42,
      parentCommunity: 'Distrito Norte',
      status: 'active',
      createdAt: '2023-05-15'
    },
    {
      id: 'e5f6g7h8',
      name: 'Condominio Vista Hermosa',
      description: 'Comunidad cerrada con áreas verdes',
      location: 'Zona Este',
      members: 28,
      parentCommunity: null,
      status: 'active',
      createdAt: '2023-04-10'
    },
    {
      id: 'i9j0k1l2',
      name: 'Residencial Los Pinos',
      description: 'Comunidad familiar con parque central',
      location: 'Zona Centro',
      members: 35,
      parentCommunity: 'Distrito Central',
      status: 'inactive',
      createdAt: '2023-03-22'
    }
  ]);

  const [filters, setFilters] = useState({
    search: '',
    status: 'all',
    location: 'all'
  });

  const [expandedCommunity, setExpandedCommunity] = useState(null);

  const toggleExpand = (id) => {
    setExpandedCommunity(expandedCommunity === id ? null : id);
  };

  const filteredCommunities = communities.filter(community => {
    return (
      (filters.status === 'all' || community.status === filters.status) &&
      (filters.location === 'all' || community.location === filters.location) &&
      community.name.toLowerCase().includes(filters.search.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold text-gray-800">Gestión de Comunidades</h1>
        
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <div className="relative flex-1 min-w-[200px]">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar comunidades..."
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
            <option value="active">Activas</option>
            <option value="inactive">Inactivas</option>
          </select>
          
          <select
            className="border border-gray-300 rounded-lg px-3 py-2"
            value={filters.location}
            onChange={(e) => setFilters({...filters, location: e.target.value})}
          >
            <option value="all">Todas las zonas</option>
            <option value="Sector Norte">Norte</option>
            <option value="Zona Este">Este</option>
            <option value="Zona Centro">Centro</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
          <div className="col-span-4">Nombre</div>
          <div className="col-span-2">Ubicación</div>
          <div className="col-span-2">Miembros</div>
          <div className="col-span-2">Comunidad padre</div>
          <div className="col-span-2">Estado</div>
        </div>
        
        {filteredCommunities.length > 0 ? (
          filteredCommunities.map(community => (
            <div key={community.id} className="border-b border-gray-200 last:border-0">
              <div 
                className="grid grid-cols-12 p-4 items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleExpand(community.id)}
              >
                <div className="col-span-4 font-medium flex items-center gap-2">
                  {community.name}
                </div>
                <div className="col-span-2 flex items-center gap-1 text-gray-600">
                  <FiMapPin className="text-sm" /> {community.location}
                </div>
                <div className="col-span-2 flex items-center gap-1">
                  <FiUsers className="text-sm" /> {community.members}
                </div>
                <div className="col-span-2 text-gray-600">
                  {community.parentCommunity || 'N/A'}
                </div>
                <div className="col-span-2 flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    community.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {community.status === 'active' ? 'Activa' : 'Inactiva'}
                  </span>
                  {expandedCommunity === community.id ? 
                    <FiChevronUp className="ml-auto" /> : 
                    <FiChevronDown className="ml-auto" />}
                </div>
              </div>
              
              {expandedCommunity === community.id && (
                <div className="px-4 pb-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Descripción</h3>
                      <p className="text-gray-600">{community.description}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Detalles</h3>
                      <p className="text-gray-600">Creada: {new Date(community.createdAt).toLocaleDateString()}</p>
                      <p className="text-gray-600">ID: {community.id}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 justify-end">
                      <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                        <FiEdit /> Editar
                      </button>
                      <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition">
                        <FiTrash2 /> {community.status === 'active' ? 'Desactivar' : 'Activar'}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No se encontraron comunidades con los filtros actuales
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunitiesPage;