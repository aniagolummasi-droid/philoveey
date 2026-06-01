import { useAuth } from '../hooks/useAuth'

function Profile() {
  const { setUser, user } = useAuth()

  const handleLogout = () => {
    setUser(null)
    window.location.hash = '#home'
  }

  return (
    <section className="page-section">
      <h1>Profile</h1>
      {user ? (
        <div className="profile-panel">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          {user.phone ? <p><strong>Phone:</strong> {user.phone}</p> : null}
          <a className="button compact" href="#orders">
            View Orders
          </a>
          <button className="button primary compact" type="button" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>Please login to view your profile.</p>
      )}
    </section>
  )
}

export default Profile
