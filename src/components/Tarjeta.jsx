function Tarjeta({ plan,isFavorite = false }) {
  return (
    <div className="tarjeta">
      <h2>{plan.name}</h2>
      <p>{plan.description}</p>
      {isFavorite && <span>⭐ Favorito</span>}  
    </div>
  )
}

export default Tarjeta;