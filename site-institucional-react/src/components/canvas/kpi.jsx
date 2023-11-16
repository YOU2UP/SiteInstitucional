import React from 'react'
import '../../css-images/css/kpi.css'

function Kpi() {
  return (
    <div className='kpiContainer'>
        <div className="kpi">
            <div className="tituloKpi">
                <h1>Dia com mais Treinos</h1>
            </div>

            {/* <div className="corpoKpi">
                <h1>Segunda-Feira</h1>
            </div> */}
        </div>
        <div className="kpi">
        <div className="tituloKpi">
                <h1>Parceiro com mais Treinos</h1>
            </div>
        </div>
        <div className="kpi">
        <div className="tituloKpi">
                <h1>Média de Treinos Por mes</h1>
            </div>
        </div>
    </div>
  )
}

export default Kpi
