import "./ListaTutores.css";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios"
import { toast } from "react-toastify";

const ListaTutores = ({ tutores, setTutores, setOnEdit }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/tutor" + id)
      .then(({ data }) => {
        const newArray = tutores.filter((user) => user.id != id);

        setTutores(newArray);
        toast.success(data);
      })
  }

  return (
    <section className="lista-tutores">
        <table className="lista-tutores__container">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Contato</th>
              <th>Endereço</th>
              <th>CPF</th>
            </tr>
          </thead>
          <tbody>
            {tutores.map((item, i) => (
              <tr key={i}>
                <td>{item.nomeTutor}</td>
                <td>{item.contato}</td>
                <td>{item.endereco}</td>
                <td>{item.cpf}</td>
                <td><FaEdit onClick={() => handleEdit(item)}/></td>
                <td><FaTrash onClick={() => handleDelete(item.id)} /></td>
              </tr>
            ))}            
          </tbody>
        </table>
    </section>
  )
}

export default ListaTutores;