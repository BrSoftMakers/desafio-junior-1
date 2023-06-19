import { useEffect, useState } from "react"
import Cabecalho from "./components/Cabecalho"
import Formulario from "./components/Formulario"
import ListaTutores from "./components/ListaTutores"
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tutores, setTutores] = useState([]);
  const [onEdit, setOnEdit] = useState(null)
  const [update, setUpdate] = useState(false)

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
  }, [setTutores, update]);

  return (
    <div>
      <Cabecalho />
      <Formulario onEdit={onEdit} setOnEdit={setOnEdit} getTutores={getTutores} update={() => setUpdate(!update)} />
      <ListaTutores tutores={tutores} setTutores={setTutores} setOnEdit={setOnEdit}/>
      <ToastContainer autoClose={5000} position={toast.POSITION.TOP_RIGHT} theme="colored" />
    </div>
  )
}

export default App
