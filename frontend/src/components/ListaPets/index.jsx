import "./ListaPets.css"
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios"
import { toast } from "react-toastify";

const ListaPets = ({ pets, setPets, setOnEdit }) => {

  const handleEdit = (item) => {
    setOnEdit(item);
  };

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/pet" + id)
      .then(({ data }) => {
        const newArray2 = pets.filter((user) => user.id != id);

        setPets(newArray2);
        toast.success(data);
      })
  }

  return (
    <section className="lista-pets">
        <table className="lista-pets__container">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Raça</th>
              <th>Idade</th>
            </tr>
          </thead>
          <tbody>
            {pets.map((item, i) => (
              <tr key={i}>
                <td>{item.nomePet}</td>
                <td>{item.tipo}</td>
                <td>{item.raca}</td>
                <td>{item.idade}</td>
                <td><FaEdit onClick={() => handleEdit(item)}/></td>
                <td><FaTrash onClick={() => handleDelete(item.id)} /></td>
              </tr>
            ))}            
          </tbody>
        </table>
    </section>
  )
}

export default ListaPets;