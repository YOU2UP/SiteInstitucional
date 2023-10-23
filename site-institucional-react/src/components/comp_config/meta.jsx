import React, { useState, useEffect } from 'react'
import api from '../../api'
import '../../css-images/css/meta.css'
import Breadcrumb from '../Breadcrumb/breadcrumb'

function Meta() {

  const id = sessionStorage.getItem('id')
  const token = sessionStorage.getItem('token')

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
  };

  const breadcrumbLinks = [
    { label: 'Home', to: '/pagina_inicial' },
    { label: 'Perfil', to: '/perfil' },
    { label: 'Meta', to: '/configuracao' }
  ];

  const [meta, setMeta] = useState(0)



  useEffect(() => {
    api.get(`/usuarios/${id}`, config).then((response) => {
      setMeta(response.data.metaTreinos)
      console.log(token)
      console.log("meta de treinos: ", meta)
    }).catch((error) => {
      console.log("Erro: ", error)
    })

  }, [])




  return (
    <div>
      <>

        <div className="Breadcrub">
          <Breadcrumb links={breadcrumbLinks} currentPage='/configuracao' />
        </div>

        <div className="containerMeta">
          <div className='textoMeta'>
            <span className="tituloMeta">Defina sua Meta</span>
            Sua meta atual é...

            {meta === 0 ? (
              <span className="metaAtual">Você ainda não possui uma meta... defina uma!</span>
            ) : (
              <span className="metaAtual">{meta} treinos</span>
            )}

          </div>

          <div className="defineMeta">
            Quantos treinos você gostaria de alcançar?
            <input type="text" name='meta' placeholder='Ex: Eu gostaria de alcançar 150 treinos' className='iptMeta' />
            <button className="btnDefineMeta">Definir meta</button>
          </div>

        </div>
      </>
    </div>
  )
}

export default Meta
