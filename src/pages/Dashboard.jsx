import DashboardStats from '../components/dashboard/DashboardStats'
import DashboardLayout from '../components/layout/DashboardLayout'

function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <DashboardStats />
    </DashboardLayout>
  )
}

export default Dashboard
