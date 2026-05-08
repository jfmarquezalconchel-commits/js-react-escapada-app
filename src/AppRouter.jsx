import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Planes from './pages/Planes.jsx'
import Favorites from './pages/Favorites.jsx'
import NotFound from './pages/NotFound.jsx'
import About from './pages/About.jsx'
import PlanDetalle from './pages/PlanDetalle.jsx'


function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="planes" element={<Planes />} />
        <Route path="planes/:planeId" element={<PlanDetalle />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="about" element={<About />} />  
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter