import { useParams, useLocation, useNavigate } from 'react-router-dom';
import "./Planes.css";
import PlanSaveButton from '../components/PlanSaveButton';

function PlanDetalle() {
  const planId = useParams().id;
  const plan = useLocation().state?.plan || {
    id: planId,
    name: "Plan no encontrado",
    description: "No se han podido cargar los detalles de este plan."
  };

  let favorites=localStorage.getItem("favorites");
  console.log(favorites);
  plan.isFavorite=false;
  if(favorites!=null && JSON.parse(favorites).includes(plan.id)){
    plan.isFavorite=true;
  }

  const navigate = useNavigate();

  return (
    <div className="plan-detalle">
      <h1 className="plan-title">{plan.name}</h1>
      <p className="plan-type">Tipo: {`${plan.type}`.toUpperCase()}</p>
      <p className="plan-location">Localizacion:{plan.location}</p>
      <p className="plan-duration">Duracion:{plan.duration}</p>
      <p className="plan-price">Precio:{plan.estimatedPrice === 0 ? "Gratis" : `$${plan.estimatedPrice}`}</p>
      <p className="plan-rating">Valoración: {plan.rating} ⭐</p>
      <p className="plan-description">Descripcion: {plan.description}</p>
      {plan.isFavorite && <p className="favorite-badge">⭐ Favorito</p>}
      <p><PlanSaveButton id={plan.id} isSaved={plan.isFavorite} /></p>
      <p><button className="back-button" onClick={(e) => { e.stopPropagation(); navigate(-1); }}>← Volver</button> </p>
    </div>
  );
}

export default PlanDetalle;
