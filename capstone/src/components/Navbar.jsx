import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to='/' className="navbar-brand">🎬 Movie App</Link>
          <div className="navbar-links">
            <Link to='/' className="navbar-link">Home</Link>
            <Link to='/favourites' className="navbar-link">Favourite</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar