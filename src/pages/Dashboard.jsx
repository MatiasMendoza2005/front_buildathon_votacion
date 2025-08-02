import SummaryCards from '../components/dashboard/SummaryCards';
import CommunityRequestsTable from '../components/dashboard/CommunityRequestsTable';
import ActiveVotesList from '../components/dashboard/ActiveVotesList';
import ParticipationChart from '../components/dashboard/ParticipationChart';
import VolunteerStats from '../components/dashboard/VolunteerStats';
import { mockDashboardData } from '../services/mockData';

const Dashboard = () => {
  const {
    summaryData,
    communityRequests,
    activeVotes,
    participationData,
    volunteerStats
  } = mockDashboardData;

  return (
    <div className="container mx-auto px-4 py-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Community Admin Dashboard</h1>
      
      <SummaryCards {...summaryData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <CommunityRequestsTable requests={communityRequests} />
        </div>
        <div>
          <ActiveVotesList votes={activeVotes} />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ParticipationChart data={participationData} />
        <VolunteerStats stats={volunteerStats} />
      </div>
    </div>
  );
};

export default Dashboard;