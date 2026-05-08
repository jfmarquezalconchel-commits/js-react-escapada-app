import { plans } from '../data/plans.js'
import Tarjeta from '../components/Tarjeta.jsx'


function Planes() {

  return (
    <div>
      <h1>Planes</h1>
      <p>This is the planes page where you can see all the available planes.</p>

      {plans.map((plan) => (
        <Tarjeta key={plan.id} plan={plan} />
      ))}

    </div>
  )
}   

export default Planes