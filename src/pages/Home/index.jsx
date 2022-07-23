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

const Home = () => {
  return (
    <SectionWrapper>
      <FormRegisterWrapper>
        <H1>Cadastre seu Pet</H1>
        <P>Realize o cadastro do seu animalzinho</P>
        <Form>
          <InputsWrapperLeft>
            <TitleInfo>Informações do Pet</TitleInfo>
            <LabelInput>
              <SpanInput>Nome:</SpanInput>
              <InputText
                type="text"
                name="petName"
                required
                placeholder="Nome do seu Pet..."
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Idade:</SpanInput>
              <InputText
                type="text"
                name="petAge"
                required
                placeholder="Idade do seu Pet..."
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Tipo:</SpanInput>
              <InputText
                type="text"
                name="petType"
                required
                placeholder="Cachorro, Gato ou..."
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Raça:</SpanInput>
              <InputText
                type="text"
                name="petBreed"
                required
                placeholder="A raça do seu Pet..."
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
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Contato:</SpanInput>
              <InputText
                type="text"
                name="contact"
                required
                placeholder="Digite seu contato..."
              ></InputText>
            </LabelInput>
            <LabelInput>
              <SpanInput>Endereço:</SpanInput>
              <InputText
                type="text"
                name="petName"
                required
                placeholder="Idade do seu Pet..."
              ></InputText>
            </LabelInput>
          </InputsWrapperRight>
        </Form>
        <ButtonRegister>
          Cadastrar
        </ButtonRegister>
      </FormRegisterWrapper>
    </SectionWrapper>
  );
};

export default Home;
