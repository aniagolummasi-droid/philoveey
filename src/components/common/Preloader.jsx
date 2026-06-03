import logo from '../../assets/images/logo.jpeg'
import '../../styles/preloader.css'

function Preloader() {
  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-logo-wrapper">
          <img src={logo} alt="PhiloVeey Logo" className="preloader-logo" />
        </div>
        <div className="preloader-spinner"></div>
        <p className="preloader-text">Loading PhiloVeey Store...</p>
      </div>
    </div>
  )
}

export default Preloader
