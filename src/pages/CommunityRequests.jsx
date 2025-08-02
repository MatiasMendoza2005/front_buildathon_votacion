import { useState } from 'react';
import { FiSearch, FiFilter, FiChevronDown, FiChevronUp, FiCheck, FiX } from 'react-icons/fi';

const CommunityRequestsPage = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      communityName: "Barrio Las Acacias",
      requester: "María González",
      members: 42,
      date: "2023-06-15",
      status: "pending",
      location: "Zona Norte"
    },
    {
      id: 2,
      communityName: "Condominio Vista Hermosa",
      requester: "Carlos Mendoza",
      members: 28,
      date: "2023-06-14",
      status: "pending",
      location: "Zona Este"
    },
    {
      id: 3,
      communityName: "Residencial Los Pinos",
      requester: "Ana Beltrán",
      members: 35,
      date: "2023-06-10",
      status: "approved",
      location: "Zona Centro"
    }
  ]);

  const [filters, setFilters] = useState({
    status: 'all',
    search: '',
    sort: 'newest'
  });

  const [expandedRequest, setExpandedRequest] = useState(null);

  const toggleExpand = (id) => {
    setExpandedRequest(expandedRequest === id ? null : id);
  };

  const handleApprove = (id) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'approved' } : req
    ));
  };

  const handleReject = (id) => {
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: 'rejected' } : req
    ));
  };

  const filteredRequests = requests.filter(request => {
    return (
      (filters.status === 'all' || request.status === filters.status) &&
      (request.communityName.toLowerCase().includes(filters.search.toLowerCase()) ||
       request.requester.toLowerCase().includes(filters.search.toLowerCase()))
    );
  }).sort((a, b) => {
    return filters.sort === 'newest' 
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Solicitudes de Comunidades</h1>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar por nombre o solicitante..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full"
              value={filters.search}
              onChange={(e) => setFilters({...filters, search: e.target.value})}
            />
          </div>
          
          <div className="flex gap-2">
            <select 
              className="border border-gray-300 rounded-lg px-3 py-2"
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
            >
              <option value="all">Todos</option>
              <option value="pending">Pendientes</option>
              <option value="approved">Aprobados</option>
              <option value="rejected">Rechazados</option>
            </select>
            
            <button className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
              <FiFilter />
              <span>Orden: {filters.sort === 'newest' ? 'Más nuevos' : 'Más antiguos'}</span>
              <FiChevronDown 
                className={`transition-transform ${filters.sort === 'newest' ? 'rotate-0' : 'rotate-180'}`}
                onClick={() => setFilters({...filters, sort: filters.sort === 'newest' ? 'oldest' : 'newest'})}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-100 p-4 font-medium text-gray-700">
          <div className="col-span-4">Comunidad</div>
          <div className="col-span-2">Solicitante</div>
          <div className="col-span-2">Miembros</div>
          <div className="col-span-2">Ubicación</div>
          <div className="col-span-2">Estado</div>
        </div>
        
        {filteredRequests.length > 0 ? (
          filteredRequests.map(request => (
            <div key={request.id} className="border-b border-gray-200 last:border-0">
              <div 
                className="grid grid-cols-12 p-4 items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleExpand(request.id)}
              >
                <div className="col-span-4 font-medium">{request.communityName}</div>
                <div className="col-span-2 text-gray-600">{request.requester}</div>
                <div className="col-span-2">{request.members}</div>
                <div className="col-span-2 text-gray-600">{request.location}</div>
                <div className="col-span-2 flex items-center">
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    request.status === 'approved' ? 'bg-green-100 text-green-800' :
                    request.status === 'rejected' ? 'bg-red-100 text-red-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {request.status === 'approved' ? 'Aprobado' : 
                     request.status === 'rejected' ? 'Rechazado' : 'Pendiente'}
                  </span>
                  {expandedRequest === request.id ? <FiChevronUp className="ml-auto" /> : <FiChevronDown className="ml-auto" />}
                </div>
              </div>
              
              {expandedRequest === request.id && (
                <div className="px-4 pb-4 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Detalles</h3>
                      <p className="text-gray-600">Fecha: {new Date(request.date).toLocaleDateString()}</p>
                      <p className="text-gray-600">ID: {request.id}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-medium text-gray-700 mb-2">Documentos Adjuntos</h3>
                      <div className="flex gap-2">
                        <button className="text-blue-600 hover:underline">Acta constitutiva.pdf</button>
                        <button className="text-blue-600 hover:underline">Planos.jpg</button>
                      </div>
                    </div>
                    
                    {request.status === 'pending' && (
                      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-2 justify-end">
                        <button 
                          onClick={() => handleApprove(request.id)}
                          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                          <FiCheck /> Aprobar
                        </button>
                        <button 
                          onClick={() => handleReject(request.id)}
                          className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
                        >
                          <FiX /> Rechazar
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            No se encontraron solicitudes con los filtros actuales
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityRequestsPage;