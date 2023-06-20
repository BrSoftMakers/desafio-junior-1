import { useEffect, useState } from "react";
import Cabecalho from "./components/Cabecalho";
import Formulario from "./components/FormularioTutor";
import FormularioPet from "./components/FormularioPet";
import ListaTutores from "./components/ListaTutores";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ListaPets from "./components/ListaPets";

function App() {
  const [tutores, setTutores] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [update, setUpdate] = useState(false);

  const getTutores = async () => {
    try {
      const res = await axios.get("http://localhost:8800/tutor");
      setTutores(res.data.sort((a, b) => (a.nomeTutor > b.nomeTutor ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getTutores();
  }, [setTutores, update]);

  const [pets, setPets] = useState([]);

  const getPets = async () => {
    try {
      const res = await axios.get("http://localhost:8800/pet");
      setPets(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getPets();
  }, [setPets, update]);

  return (
    <div>
      <Cabecalho />
      <Formulario onEdit={onEdit} setOnEdit={setOnEdit} getTutores={getTutores} update={() => setUpdate(!update)} />
      <ListaTutores tutores={tutores} setTutores={setTutores} setOnEdit={setOnEdit} />
      <ToastContainer autoClose={7000} position={toast.POSITION.TOP_RIGHT} />
      <FormularioPet onEdit={onEdit} setOnEdit={setOnEdit} getPets={getPets} update={() => setUpdate(!update)} />
      <ListaPets pets={pets} setPets={setPets} setOnEdit={setOnEdit} />
    </div>
  )
}

export default App
