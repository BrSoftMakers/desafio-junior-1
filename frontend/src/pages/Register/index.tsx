import React, { useEffect, useState, useCallback } from 'react';
import { FiChevronLeft, FiAlertTriangle } from 'react-icons/fi';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

import { Header, Title, FormContainer, InputDiv, InfoDiv } from './styles';

import logoImg from '../../assets/logoPetShop.png';

interface RoutParams {
  petId: string;
}

interface Pet {
  id?: string;
  pet_name: string;
  age: number;
  specie: string;
  breed: string;
  owner_name: string;
  phone_number: string;
}

const Register: React.FC = () => {
  const history = useHistory();
  const { petId } = useParams<RoutParams>();
  const [initialValues, setinitialValues] = useState<Pet>({
    pet_name: '',
    age: 1,
    specie: 'Cachorro',
    breed: '',
    owner_name: '',
    phone_number: '',
  });

  const Schema = Yup.object().shape({
    pet_name: Yup.string().required('Required'),
    breed: Yup.string().required('Required'),
    owner_name: Yup.string().required('Required'),
    phone_number: Yup.string().required('Required'),
  });

  useEffect(() => {
    if (!petId) {
      return;
    }

    async function loadData(): Promise<void> {
      await api.get(`pets/${petId}`).then(response => {
        setinitialValues(response.data);
      });
    }
    loadData();
  }, [petId]);

  const handleSubmit = useCallback(
    (data: Omit<Pet, 'id'>) => {
      async function create(): Promise<void> {
        if (!petId) {
          await api.post(`pets`, data);
        } else {
          await api.put(`pets`, data);
        }
      }

      create();

      history.push('/');
    },
    [petId, history],
  );

  return (
    <>
      <Header>
        <div>
          <img src={logoImg} alt="Github Explorer" />
          <Title>Informações Cadastrais</Title>
        </div>
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <FormContainer>
        <Formik
          initialValues={initialValues}
          validationSchema={Schema}
          enableReinitialize
          onSubmit={values => {
            handleSubmit(values);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <strong>Dados Pet</strong>
              <InfoDiv>
                <InputDiv>
                  <div>
                    <p>Nome</p>
                    {errors.pet_name && touched.pet_name ? (
                      <FiAlertTriangle size={16} color="#ff0000" />
                    ) : null}
                  </div>
                  <Field id="pet_name" name="pet_name" />
                </InputDiv>
                <InputDiv>
                  <p>Idade</p>
                  <Field id="age" type="number" name="age" />
                </InputDiv>
              </InfoDiv>
              <InfoDiv>
                <InputDiv>
                  <p>Especie</p>
                  <Field id="specie" as="select" name="specie">
                    <option value="Cachorro">Cachorro</option>
                    <option value="Gato">Gato</option>
                  </Field>
                </InputDiv>
                <InputDiv>
                  <div>
                    <p>Raça</p>
                    {errors.breed && touched.breed ? (
                      <FiAlertTriangle size={16} color="#ff0000" />
                    ) : null}
                  </div>
                  <Field id="breed" name="breed" />
                </InputDiv>
              </InfoDiv>
              <strong>Dados Do Dono</strong>
              <InfoDiv>
                <InputDiv>
                  <div>
                    <p>Nome</p>
                    {errors.owner_name && touched.owner_name ? (
                      <FiAlertTriangle size={16} color="#ff0000" />
                    ) : null}
                  </div>
                  <Field id="owner_name" name="owner_name" />
                </InputDiv>
                <InputDiv>
                  <div>
                    <p>Telefone</p>
                    {errors.phone_number && touched.phone_number ? (
                      <FiAlertTriangle size={16} color="#ff0000" />
                    ) : null}
                  </div>
                  <Field id="phone_number" name="phone_number" />
                </InputDiv>
              </InfoDiv>
              <button type="submit">
                {!petId ? 'Cadastrar' : 'Atualizar'}
              </button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default Register;
