const SummaryCards = ({ pendingRequests, activeCommunities, totalVolunteers, activeVotes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Solicitudes Pendientes</h3>
        <p className="text-2xl font-bold text-blue-600">{pendingRequests}</p>
        <p className="text-xs text-gray-400">Require admin action</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Active Communities</h3>
        <p className="text-2xl font-bold text-green-600">{activeCommunities}</p>
        <p className="text-xs text-gray-400">Total registered</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Volunteers</h3>
        <p className="text-2xl font-bold text-purple-600">{totalVolunteers}</p>
        <p className="text-xs text-gray-400">With token access</p>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow">
        <h3 className="text-gray-500 text-sm font-medium">Active Votes</h3>
        <p className="text-2xl font-bold text-orange-600">{activeVotes}</p>
        <p className="text-xs text-gray-400">Currently running</p>
      </div>
    </div>
  );
};

export default SummaryCards;