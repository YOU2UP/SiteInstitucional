import React from 'react'
import Menu from '../components/menu/Menu_adm'
import '../css-images/css/painel_adm.css'
import Dash1 from '../components/dashs/match_mes'
import Dash2 from '../components/dashs/treinos_dash'
import Dash3 from '../components/dashs/perfis_dash'
import Dash4 from '../components/dashs/dash_nivel'

function Painel_adm() {
    return (
        <>

        <div className="seguraTudoAdm">

            <Menu />

            <div className="containerPainelAdm">
            <div className="tituloDash">
                Analise de dados Projeto You2Up
            </div>
                <div className="seguraDash">
                    <div className="duplaDash">

                        <Dash1 />
                        <Dash3 />
                    </div>
                    <div className="duplaDash">

                        <Dash2 />
                        <Dash4 />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Painel_adm
