import React from 'react'
import '../../css-images/css/alterar.css'

function alterar(id, token) {
  return (
    <>
        <div className="containerAltera">

            <div className="tituloAltera">Alteração de dados da conta</div>

            <div className="seguraInput">
              <div>
                <label for="nome">Nome:</label>
                <div className="inputBtn">
                <input className='ipt' type="text" name="nome" id="nome" />
                <button className='Alterar'>Alterar</button> 
                </div>
              </div>

                <div>
                <label for="email">Email:</label>
                <div className="inputBtn">
                <input className='ipt' type="text" name="email" id="email" />
                <button className='Alterar'>Alterar</button> 
                </div>
                </div>

                <div>
                <label for="descricao">Descrição:</label>
                <div className="inputBtn">
                <input className='ipt' type="text" name="descricao" id="descricao" />
                <button className='Alterar'>Alterar</button> 
                </div>
                </div>


                <div>
                <label for="senha">Senha:</label>
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
