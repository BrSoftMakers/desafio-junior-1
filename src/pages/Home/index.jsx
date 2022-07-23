// CSS
import {
  ButtonRegister,
  Form,
  FormRegisterWrapper,
  H1,
  InputsWrapperLeft,
  InputsWrapperRight,
  InputText,
  LabelInput,
  P,
  SectionWrapper,
  SpanInput,
  TitleInfo,
} from "./style";

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // states
  const [petName, setPetName] = useState("");
  const [petImage, setPetImage] = useState("");
  const [petAge, setPetAge] = useState("");
  const [petType, setPetType] = useState("");
  const [petBreed, setPetBreed] = useState("");
  const [tutorName, setTutorName] = useState("");
  const [tutorContact, setTutorContact] = useState("");
  const [tutorAdress, setTutorAdress] = useState("");
  const [formError, setFormError] = useState("");

  // HandleFormSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SectionWrapper>
      <FormRegisterWrapper>
        <H1>Cadastre seu Pet</H1>
        <P>Realize o cadastro do seu animalzinho</P>
        <Form onSubmit={handleSubmit}>
          <InputsWrapperLeft>
            <TitleInfo>Informações do Pet</TitleInfo>
            <LabelInput>
              <SpanInput>Nome:</SpanInput>
              <InputText
                type="text"
                name="petName"
                required
                placeholder="Nome do seu Pet..."
                onChange={(e) => setPetName(e.target.value)}
                value={petName}
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Foto:</SpanInput>
              <InputText
                type="text"
                name="petImage"
                required
                placeholder="Insira uma URL válida de uma foto..."
                onChange={(e) => setPetImage(e.target.value)}
                value={petImage}
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Idade:</SpanInput>
              <InputText
                type="text"
                name="petAge"
                required
                placeholder="Insira uma URL válida de uma foto..."
                onChange={(e) => setPetAge(e.target.value)}
                value={petAge}
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Tipo:</SpanInput>
              <InputText
                type="text"
                name="petType"
                required
                placeholder="Cachorro, Gato ou..."
                onChange={(e) => setPetType(e.target.value)}
                value={petType}
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Raça:</SpanInput>
              <InputText
                type="text"
                name="petBreed"
                required
                placeholder="A raça do seu Pet..."
                onChange={(e) => setPetBreed(e.target.value)}
                value={petBreed}
              ></InputText>
            </LabelInput>
          </InputsWrapperLeft>
          <InputsWrapperRight>
            <TitleInfo>Informações Pessoais</TitleInfo>
            <LabelInput>
              <SpanInput>Tutor:</SpanInput>
              <InputText
                type="text"
                name="tutorName"
                required
                placeholder="Nome do tutor..."
                onChange={(e) => setTutorName(e.target.value)}
                value={tutorName}
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Contato:</SpanInput>
              <InputText
                type="number"
                name="contact"
                required
                placeholder="Digite seu contato... (apenas números)"
                onChange={(e) => setTutorContact(e.target.value)}
                value={tutorContact}
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Endereço:</SpanInput>
              <InputText
                type="text"
                name="tutorAdress"
                required
                placeholder="Endereço (Rua, Nº, Bairro)..."
                onChange={(e) => setTutorAdress(e.target.value)}
                value={tutorAdress}
              ></InputText>
            </LabelInput>
          </InputsWrapperRight>
          <ButtonRegister>Cadastrar</ButtonRegister>
        </Form>
      </FormRegisterWrapper>
    </SectionWrapper>
  );
};

export default Home;
