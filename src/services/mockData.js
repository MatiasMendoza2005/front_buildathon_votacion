export const mockDashboardData = {
  summaryData: {
    pendingRequests: 12,
    activeCommunities: 45,
    totalVolunteers: 1240,
    activeVotes: 8
  },
  communityRequests: [
    {
      id: 1,
      date: '2023-05-15',
      name: 'Las Acacias Neighborhood',
      members: 32,
      status: 'pending'
    },
    {
      id: 2,
      date: '2023-05-14',
      name: 'Riverside Community',
      members: 28,
      status: 'pending'
    }
  ],
  activeVotes: [
    {
      id: 1,
      title: 'New playground equipment',
      community: 'Central District',
      daysLeft: 3,
      progress: 75,
      votesCount: 45,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Street cleaning schedule',
      community: 'Northside',
      daysLeft: 7,
      progress: 42,
      votesCount: 25,
      status: 'Active'
    }
  ],
  participationData: [
    // ... data for the chart
  ],
  volunteerStats: {
    total: 1240,
    withTokens: 980,
    activeThisMonth: 420
  }
};