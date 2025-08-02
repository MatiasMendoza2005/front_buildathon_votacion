const VolunteerStats = ({ stats }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Volunteer Statistics</h2>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Total Volunteers:</span>
          <span className="font-bold">{stats.total}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">With Tokens:</span>
          <span className="font-bold text-green-600">{stats.withTokens}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">Active This Month:</span>
          <span className="font-bold text-blue-600">{stats.activeThisMonth}</span>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500" 
              style={{ width: `${(stats.activeThisMonth / stats.total) * 100}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-1 text-center">
            {Math.round((stats.activeThisMonth / stats.total) * 100)}% monthly activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerStats;