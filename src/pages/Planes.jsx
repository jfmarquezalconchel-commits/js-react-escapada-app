import { plans,types,locations } from '../data/plans.js'
import Tarjeta from '../components/Tarjeta.jsx'
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import "./Planes.css";


function Planes() {

  let favorites=localStorage.getItem("favorites");
  favorites = (favorites==null ? [] : JSON.parse(favorites));

  let [params,setParams] = useSearchParams();

  const q = params.get('q') || ''
  const type = params.get('type') || 'todas'

  function updateParam(key, value) {
    const nextParams = new URLSearchParams(params)

    if (value === '' || value === 'todas') {
      nextParams.delete(key)
    } else {
      nextParams.set(key, value)
    }

    setParams(nextParams)
  }

  const selected = plans.filter((plan)=>{return type==="todas" ? true : plan.type === type })
    .filter((plan)=>{ 
      const texto = `${plan.name} ${plan.description}`.toLowerCase()
      return texto.includes(q.toLowerCase());
    });
    
  

  return (
    <div>
      <div className="planes-header">
        <h1>Planes</h1>
        <p>Planes Disponibles</p>
      </div>
      <div className="search-form">
        <label htmlFor="query">Buscar:</label>
        <input type="text" name='query' id="query" onChange={(event)=>updateParam('q',event.target.value)} />
        <select name="type" onChange={(event)=> updateParam('type',event.target.value)}>
          <option key="" value="">Todos</option>
          {types.map((n)=>(<option key={n} value={n}>{n.toUpperCase()}</option>))}
        </select>
      </div>


      <section>
      {selected.map((plan) => (
        <Tarjeta key={plan.id} plan={plan} isFavorite={ favorites.includes(plan.id)}/>
      ))}
      </section>

    </div>
  )
}   

export default Planes