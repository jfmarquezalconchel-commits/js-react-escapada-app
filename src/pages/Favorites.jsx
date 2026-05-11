import { plans } from "../data/plans.js";
import Tarjeta from "../components/Tarjeta.jsx";

function Favorites() {

 let favorites=localStorage.getItem("favorites");
 favorites = (favorites==null ? [] : JSON.parse(favorites));
 console.log(favorites);
 

  return (
    <div>
      <h1>Favorites</h1>
      <p>This is the favorites page where you can see your favorite planes.</p>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((favorite, index) => (
          <Tarjeta plan={plans.find(plani=>plani.id==favorite)} isFavorite={true}/>
        ))
      )}

    </div>
  )
}   

export default Favorites 