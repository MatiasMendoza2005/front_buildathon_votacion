const VolunteerStats = ({ stats }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Estadísticas de Voluntarios</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Total Voluntarios:</span>
          <span className="font-bold text-gray-900">{stats.total}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Con Tokens:</span>
          <span className="font-bold text-green-600">{stats.withTokens}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-700">Activos este Mes:</span>
          <span className="font-bold text-blue-600">{stats.activeThisMonth}</span>
        </div>
        
        <div className="pt-4 border-t border-gray-300">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gray-600" 
              style={{ width: `${(stats.activeThisMonth / stats.total) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">
            {Math.round((stats.activeThisMonth / stats.total) * 100)}% actividad mensual
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerStats;