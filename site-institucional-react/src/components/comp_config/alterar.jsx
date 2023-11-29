import React, {useState} from 'react'
import '../../css-images/css/alterar.css'
import Breadcrumb from '../Breadcrumb/breadcrumb'
import api from '../../api'
import { de } from 'date-fns/locale';

function Alterar() {

  const token = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [senha, setSenha] = useState('');

  const handleSaveChanges = () => {
    // Montar o corpo da requisição com os valores dos inputs
    const requestBody = {

      nome: nome,
      email: email,
      descricao: descricao,
      senha: senha,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },

      body: JSON.stringify(requestBody)
    };

    // Enviar a requisição POST usando axios
    api.put(`/usuarios/${id}`, config)
      .then(response => {

        console.log('Resposta da requisição:', response.data);
      })
      .catch(error => {
      
        console.error('Erro na requisição:', error);
      });
  };

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
              <input className='ipt' type="text" name="nome" id="nome" value={nome} onChange={(e) => setNome(e.target.value)}/>
              <button className='Alterar'>Alterar</button>
            </div>
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <div className="inputBtn">
              <input className='ipt' type="text" name="email" id="email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
              <button className='Alterar'>Alterar</button>
            </div>
          </div>

          <div>
            <label htmlFor="descricao">Descrição:</label>
            <div className="inputBtn">
              <input className='ipt' type="text" name="descricao" id="descricao" value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
              <button className='Alterar'>Alterar</button>
            </div>
          </div>


          <div>
            <label htmlFor="senha">Senha:</label>
            <div className="inputBtn">
              <input className='ipt' type="text" name="senha" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
              <button className='Alterar'>Alterar</button>
            </div>
          </div>

        </div>
        <div className="ExecutaAltera">
          <button className='btnSalvaAltera' onClick={handleSaveChanges}>Salvar Alterações</button>
        </div>
      </div>
    </>
  )
}

export default Alterar
