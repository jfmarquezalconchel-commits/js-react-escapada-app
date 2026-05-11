import "./About.css";
import beachImg from '../assets/beach.jpg';
import mountainImg from '../assets/mountain.jpg';
import cityImg from '../assets/city.jpg';
import { useNavigate } from "react-router-dom";

function About() {
  const navigate=useNavigate();
  return (
    <div className="about-page">
      <section className="intro-section">
        <h1>Descubre destinos de ensueño</h1>
        <p>
          En Escapadas te ofrecemos una selección de los lugares más maravillosos para tus
          vacaciones. Desde playas de arena dorada hasta montañas majestuosas y ciudades vibrantes,
          cada destino está pensado para recargar energías y crear recuerdos inolvidables.
        </p>
      </section>

      <section className="gallery-section">
        <h2>Galería de destinos</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src={beachImg} alt="Playa paradisíaca" />
            <p>Playas de arena blanca y aguas cristalinas</p>
          </div>
          <div className="gallery-item">
            <img src={mountainImg} alt="Montañas imponentes" />
            <p>Montañas para senderismo y aventura</p>
          </div>
          <div className="gallery-item">
            <img src={cityImg} alt="Ciudad cosmopolita" />
            <p>Ciudades con cultura, gastronomía y vida nocturna</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>¿Listo para tu próxima escapada?</h2>
        <p>
          Explora nuestros planes y encuentra el destino perfecto para ti. ¡La aventura te espera!
        </p>
        <button className="hero-cta" onClick={()=>{  navigate("/planes"); }}>Ver planes</button>
      </section>
    </div>
  );
}

export default About;