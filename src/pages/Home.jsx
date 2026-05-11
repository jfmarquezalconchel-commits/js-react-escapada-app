import heroImg from '../assets/hollydays.jpg';
import relaxImg1 from '../assets/relax1.jpg';
import relaxImg2 from '../assets/relax2.jpg';
import relaxImg3 from '../assets/relax3.jpg';
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { types } from '../data/plans.js';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Encuentra tu Escape Perfecto</h1>
          <p>Descubre planes de relajación diseñados para recargar energías y encontrar la paz interior</p>
          <button className="hero-cta" onClick={()=>{  navigate("/planes"); }}>Explorar Planes</button>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Relax escape" />
        </div>
      </section>

      <section className="features-section">
        <h2>¿Por qué elegir Escapadas?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🧘</div>
            <h3>Relajación Total</h3>
            <p>Actividades diseñadas para reducir el estrés y mejorar tu bienestar</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🌿</div>
            <h3>Naturaleza</h3>
            <p>Conecta con la naturaleza en entornos únicos y serenos</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>Experiencias Únicas</h3>
            <p>Crea recuerdos inolvidables con experiencias personalizadas</p>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <h2>Galería de Experiencias</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={relaxImg1} alt="Yoga en la naturaleza" />
            <p>Yoga al aire libre</p>
          </div>
          <div className="gallery-item">
            <img src={relaxImg2} alt="Spa y bienestar" />
            <p>Spa y bienestar</p>
          </div>
          <div className="gallery-item">
            <img src={relaxImg3} alt="Meditación guiada" />
            <p>Meditación guiada</p>
          </div>
        </div>
      </section>
    </div>
  )
}
 
export default Home