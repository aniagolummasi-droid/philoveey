import Sidebar from './Sidebar'

function DashboardLayout({ children }) {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <section>{children}</section>
    </div>
  )
}

export default DashboardLayout
