import "./ListaTutores.css";

const ListaTutores = ({ tutores }) => {
  return (
    <section className="lista-tutores">
        <table className="lista-tutores__container">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Contato</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {tutores.map((item, i) => (
              <tr key={i}>
                <td>{item.nome}</td>
                <td>{item.contato}</td>
                <td>{item.endereco}</td>
              </tr>
            ))}            
          </tbody>
        </table>
    </section>
  )
}

export default ListaTutores;