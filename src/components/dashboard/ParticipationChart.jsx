const ParticipationChart = () => {
  // Mock data for the chart
  const participationData = [
    { name: 'Jan', participation: 45 },
    { name: 'Feb', participation: 65 },
    { name: 'Mar', participation: 52 },
    { name: 'Apr', participation: 78 },
    { name: 'May', participation: 81 },
    { name: 'Jun', participation: 67 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Participation Trend</h2>
      <div className="h-64">
        {/* This would be replaced with Chart.js or similar in a real implementation */}
        <div className="flex items-end h-48 border-b border-l border-gray-200">
          {participationData.map((month, index) => (
            <div key={index} className="flex-1 flex flex-col items-center px-2">
              <div 
                className="w-8 bg-blue-500 rounded-t hover:bg-blue-600 transition-colors"
                style={{ height: `${(month.participation / 100) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-500 mt-1">{month.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-500">Average participation: 65%</span>
        </div>
      </div>
    </div>
  );
};

export default ParticipationChart;