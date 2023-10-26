import React from 'react'
import '../../css-images/css/alterar.css'
import Breadcrumb from '../Breadcrumb/breadcrumb'

function alterar(id, token) {

  const breadcrumbLinks = [
    { label: 'Home', to: '/pagina_inicial' },
    { label: 'Perfil', to: '/perfil' },
    { label: 'Configuração', to: '/configuracao' }
  ];
  return (
    <>
    <div className="Breadcrub">
        <Breadcrumb links={breadcrumbLinks} currentPage='/configuracao' />
      </div>
      <div className="containerAltera">
        

        <div className="tituloAltera">Alteração de dados da conta</div>

        <div className="seguraInput">
          <div>
            <label htmlFor="nome">Nome:</label>
            <div className="inputBtn">
              <input className='ipt' type="text" name="nome" id="nome" />
              <button className='Alterar'>Alterar</button>
            </div>
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <div className="inputBtn">
              <input className='ipt' type="text" name="email" id="email" />
              <button className='Alterar'>Alterar</button>
            </div>
          </div>

          <div>
            <label htmlFor="descricao">Descrição:</label>
            <div className="inputBtn">
              <input className='ipt' type="text" name="descricao" id="descricao" />
              <button className='Alterar'>Alterar</button>
            </div>
          </div>


          <div>
            <label htmlFor="senha">Senha:</label>
            <div className="inputBtn">
              <input className='ipt' type="text" name="senha" id="senha" />
              <button className='Alterar'>Alterar</button>
            </div>
          </div>

        </div>
        <div className="ExecutaAltera">
          <button className='btnSalvaAltera'>Salvar Alterações</button>
        </div>
      </div>
    </>
  )
}

export default alterar
