import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Table = () => {

  const navigate = useNavigate();
  const [petshopData, setPetshopData] = useState([]);

  /* Função ativada quando algum botão é clicado*/
  const onClicked = (id, caminho, acao) => {
    /* Leva para a tela de edição baseado no id*/
    if (acao == 'editar') {
      navigate(`/${caminho}/${id}`);
    } else if (acao == 'excluir'){
      /* Deleta o dado baseado no id passado*/
      axios.delete(`http://localhost:3001/excluido/${id}`);
      navigate(`/`);
    } else {
      navigate(`/`);
    }
  }

  /* Requisição para o server buscar todos os dados no BD */
  useEffect(() => {
    axios.get("http://localhost:3001/consultar").then((response) => {
      setPetshopData(response.data);
    });
  }, []);

  return (
    /* Cabeçalho da tabela de consulta */
    <div className="container-form text-center mx-auto mt-0">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nome do Pet</th>
            <th scope="col">Tipo do Pet</th>
            <th scope="col">Nome do Dono</th>
            <th scope="col">Telefone do Dono</th>
            <th scope="col">Opções</th>
          </tr>
        </thead>
        {/*map para printar na tela dodos os regitros do banco de dados*/}
        {petshopData?.map((pets, i) =>
          <tr key={i}>
            <th scope="row">{pets.id}</th>
            <td>{pets.nome_pet}</td>
            <td>{pets.tipo_pet}</td>
            <td>{pets.nome_dono}</td>
            <td>{pets.telefone_dono}</td>
            <button className="btn btn-primary" onClick={() => onClicked(pets.id, "editar", "editar")}>Editar</button>
            <button className="btn btn-danger ms-3" onClick={() => onClicked(pets.id, " ", "excluir")}>Excluir</button>
          </tr>
        )}
      </table>
      <div className="text-end">
        <button className="btn btn-secondary" onClick={() => onClicked('')}>Cancelar</button>
      </div>
    </div>
  );
}
export default Table