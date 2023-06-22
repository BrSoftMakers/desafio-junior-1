import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from './components/Form';
import Grid from './components/Grid';
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  // const [pets, setPets] = useState([]);
  // // 

  // const getPets = async () => {
  //   try {
  //     const res = await axios.get("http://localhost:3001/pets/");
  //     console.log(res.data);
  //     setPets(res);
  //   } catch (error) {
  //     toast.error(error);
  //   }
  // };

  // useEffect(() =>{
  //   getPets();
  // }, [setPets]);
  const [pets, setPets] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getPets = async () => {
    try {
      const res = await axios.get("http://localhost:3001/pets");
      setPets(res.data);
    } catch (error) {
      toast.error(error);
    }
  };

  // useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get("http://localhost:3001/pets");
  //     console.log(response.data);
  //     setPets(response.data)
  //   }
  //   getData();
  // });
  useEffect(() => { 
    getPets();
  }, [setPets]);

  return (
    <>
      <Container>
        <Title>PETS</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getPets={getPets}/>
        <Grid pets={pets} setPets={setPets} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
      <GlobalStyle />
    </>
  );
}

export default App;
