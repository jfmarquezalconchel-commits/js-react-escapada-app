import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navbar" aria-label="Navegación principal">
      <NavLink className="navbar__link" to="/" end>
        Inicio
      </NavLink>

      <NavLink className="navbar__link" to="/planes">
        Planes
      </NavLink>

      <NavLink className="navbar__link" to="/favorites">
        Favoritos
      </NavLink>

      <NavLink className="navbar__link" to="/about">
        Acerca de
      </NavLink>
    </nav>
  )
}

export default NavBar