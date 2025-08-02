const ParticipationChart = ({ data }) => {
  // Datos de ejemplo para el gráfico
  const participationData = data || [
    { name: 'Ene', participation: 45 },
    { name: 'Feb', participation: 65 },
    { name: 'Mar', participation: 52 },
    { name: 'Abr', participation: 78 },
    { name: 'May', participation: 81 },
    { name: 'Jun', participation: 67 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Tendencia de Participación</h2>
      <div className="h-64">
        {/* Contenedor del gráfico */}
        <div className="flex items-end h-48 border-b border-l border-gray-300">
          {participationData.map((month, index) => (
            <div key={index} className="flex-1 flex flex-col items-center px-2">
              <div 
                className="w-8 bg-gray-600 rounded-t hover:bg-gray-700 transition-colors"
                style={{ height: `${(month.participation / 100) * 100}%` }}
              ></div>
              <span className="text-xs text-gray-600 mt-1">{month.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">Participación promedio: 65%</span>
        </div>
      </div>
    </div>
  );
};

export default ParticipationChart;