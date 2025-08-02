const ActiveVotesList = ({ votes }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow border border-gray-300">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Votaciones Activas</h2>
      <div className="space-y-4">
        {votes.map((vote) => (
          <div key={vote.id} className="border-l-4 border-gray-600 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{vote.title}</h3>
                <p className="text-sm text-gray-600">{vote.community} • Finaliza en {vote.daysLeft} días</p>
              </div>
              <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">
                {vote.status}
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gray-600 h-2 rounded-full" 
                  style={{ width: `${vote.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>{vote.votesCount} votos</span>
                <span>{vote.progress}% del quórum</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveVotesList;