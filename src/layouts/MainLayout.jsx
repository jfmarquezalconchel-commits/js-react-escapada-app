import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar.jsx'
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="app-header__eyebrow">Relax world</p>
          <h1 className="app-header__title">Escapadas</h1>
        </div>

        <NavBar />
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout