const CommunityRequestsTable = ({ requests }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Solicitudes Recientes de Comunidades</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Comunidad</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Solicitante</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Miembros</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{request.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{request.requester}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{request.members}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  <button className="text-gray-600 hover:text-gray-700 mr-3">Revisar</button>
                  <button className="text-green-600 hover:text-green-700">Aprobar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CommunityRequestsTable;