import React, {useState, useEffect} from 'react'
import '../../css-images/css/kpi.css'
import api from '../../api';
import { use } from 'echarts';

function Kpi() {


    const id = sessionStorage.getItem("id");
    const token = sessionStorage.getItem("token");

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    };
    
    const [treinos, setTreinos] = useState([]);

    useEffect(() => {
        api.get(`/usuarios/quantidade-treinos-semana/${id}`, config).then((resoponse) => {
                setTreinos(resoponse.data)
        }).catch((error) => {
            console.log("Erro: ", error)
        })
    }, [])

    const diaMaisTreino = null;

    function ContagemTreinos(treinos) {
    
    }

  return (
    <div className='kpiContainer'>
        <div className="kpi">
            <div className="tituloKpi">
                <h1>Dia com mais Treinos</h1>
            </div>

            <div className="corpoKpi">
                {/* <h1>Segunda-Feira</h1> */}
            </div> 
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
