const ActiveVotesList = ({ votes }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <h2 className="text-lg font-semibold mb-4">Active Community Votes</h2>
      <div className="space-y-4">
        {votes.map((vote) => (
          <div key={vote.id} className="border-l-4 border-blue-500 pl-4 py-2">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{vote.title}</h3>
                <p className="text-sm text-gray-500">{vote.community} • Ends in {vote.daysLeft} days</p>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {vote.status}
              </span>
            </div>
            <div className="mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${vote.progress}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{vote.votesCount} votes</span>
                <span>{vote.progress}% of quorum</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveVotesList;