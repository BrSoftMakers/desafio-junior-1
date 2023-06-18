import { useEffect, useState } from "react"
import Cabecalho from "./components/Cabecalho"
import Formulario from "./components/Formulario"
import ListaTutores from "./components/ListaTutores"
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"

function App() {

  const [tutores, setTutores] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getTutores = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setTutores(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTutores();
  }, [setTutores]);

  return (
    <div>
      <Cabecalho />
      <Formulario />
      <ListaTutores tutores={tutores}/>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  )
}

export default App
