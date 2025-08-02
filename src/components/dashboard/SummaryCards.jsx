const SummaryCards = ({ pendingRequests, activeCommunities, totalVolunteers, activeVotes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
        <h3 className="text-gray-600 text-sm font-medium">Solicitudes Pendientes</h3>
        <p className="text-2xl font-bold text-gray-700">{pendingRequests}</p>
        <p className="text-xs text-gray-500">Requiere acción</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
        <h3 className="text-gray-600 text-sm font-medium">Comunidades Activas</h3>
        <p className="text-2xl font-bold text-gray-700">{activeCommunities}</p>
        <p className="text-xs text-gray-500">Total registradas</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
        <h3 className="text-gray-600 text-sm font-medium">Voluntarios</h3>
        <p className="text-2xl font-bold text-gray-700">{totalVolunteers}</p>
        <p className="text-xs text-gray-500">Con acceso a tokens</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
        <h3 className="text-gray-600 text-sm font-medium">Votaciones Activas</h3>
        <p className="text-2xl font-bold text-gray-700">{activeVotes}</p>
        <p className="text-xs text-gray-500">En curso</p>
      </div>
    </div>
  );
};

export default SummaryCards;