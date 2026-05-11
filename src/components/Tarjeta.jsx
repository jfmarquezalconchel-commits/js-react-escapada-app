import PlanDetalle from "../pages/PlanDetalle";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./Tarjeta.css";
import "./Tarjeta.css";



function showPlanDetalle(plan, isFavorite,navigate) {
  navigate(`/planes/${plan.id}`, { state: { plan, isFavorite } });
}  


function Tarjeta({ plan,isFavorite = false }) {
  const navigate = useNavigate();
  return (
    <div className="tarjeta" onClick={(e) => {showPlanDetalle(plan,isFavorite,navigate)}}>
  
      <h2>{plan.name}</h2>
      <p>{plan.description}</p>
      {isFavorite && <span className="favorite-badge">⭐ Favorito</span>}  
    </div>
  )
}

export default Tarjeta;