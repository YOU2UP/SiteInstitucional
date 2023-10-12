import React, { useState, useEffect } from 'react'
import api from '../../api'

function Meta() {

  const id = sessionStorage.getItem('id')
  const token = sessionStorage.getItem('token')

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  const [meta, setMeta] = useState(0)

  useEffect(() => {
    api.get(`/usuarios/${id}`, config).then((response) => {
      setMeta(response.data.metaTreinos)
      
      console.log("meta de treinos: ", meta)
    }).catch((error) => {
      console.log("Erro: ", error)
    })
  }, [])


  return (
    <div>
      <>

        <div className="containerMeta">
          <span className="tituloMeta">Definir sua Meta</span>

        </div>
      </>
    </div>
  )
}

export default Meta
