import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import InputMask from 'react-input-mask';

import { Button, Div } from './style';
import api from '../../service/api';

export default function FormComp({ edit }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [specie, setSpecie] = useState('');
  const [breed, setBreed] = useState('');
  const [owner, setOwner] = useState('');
  const [phone, setPhone] = useState('');
  const [img, setImgUrl] = useState('');

  const [errorUrl, setErrorUrl] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  function validateUrl(url) {
    if (!(url === '')) {
      let string = url;
      let regex = /(http(s?):)|([/|.|\w|\s])*\.(?:jpg|gif|png)/;
      if (regex.test(string)) {
        setImgUrl(string);
      } else {
        setErrorUrl(true);
        setImgUrl('');
      }
    }
  }

  const pet = {
    name: name.toLowerCase(),
    age: parseInt(age),
    specie,
    breed,
    owner,
    phone,
    img
  };
  // editanto
  {
    edit
      ? useEffect(() => {
          api.get(`/pet/${edit}`).then(response => {
            setName(response.data.name);
            setAge(response.data.age);
            setSpecie(response.data.specie);
            setBreed(response.data.breed);
            setOwner(response.data.owner);
            setPhone(response.data.phone);
            setImgUrl(response.data.img_url);
          });
        }, [])
      : '';
  }
  async function handleSubmitUpdate() {
    setLoading(true);

    try {
      await api.put(`pet/${edit}`, pet);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Dados do pet alterados com sucesso!',
        showConfirmButton: false,
        timer: 1500
      });
      setTimeout(() => router.push('/'), 2500);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados incorretos!'
      });
    }
  }

  // adicionando
  async function handleSubmitCreate() {
    setLoading(true);

    try {
      if (errorUrl === true) {
        return;
      }

      const { data } = await api.get('/pets?limit=1000&page=1');

      for (const item of data.rows) {
        if (
          item.name === name &&
          item.owner === owner &&
          item.phone === phone
        ) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'O Pet já está cadastrado!'
          });
          setLoading(false);
          return;
        }
      }

      await api.post('/pet', pet);
      setLoading(false);

      setAge('');
      setSpecie('');
      setName('');
      setBreed('');
      setOwner('');
      setPhone('');
      setImgUrl('');
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: '',
        showConfirmButton: false,
        timer: 1500
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Dados incorretos!'
      });
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <Formik
      initialValues={{}}
      onSubmit={edit ? handleSubmitUpdate : handleSubmitCreate}
    >
      <Form className="form">
        <Div>
          <div className="form-field">
            Nome
            <Field
              className="field"
              onChange={({ target }) => setName(target.value)}
              placeholder="Nome"
              name="name"
              value={name}
              required="required"
            />
          </div>
          <div className="form-field">
            Idade
            <Field
              className="field"
              onChange={({ target }) => setAge(target.value)}
              placeholder="Idade"
              name="age"
              value={age}
              type="number"
              min="1"
              required="required"
            />
          </div>

          <div className="form-field">
            Especie
            <Field
              className="field"
              type="text"
              onChange={({ target }) => setSpecie(target.value)}
              placeholder="Especie"
              name="specie"
              required="required"
              value={specie}
            />
          </div>

          <div className="form-field">
            Raça
            <Field
              className="field"
              type="text"
              onChange={({ target }) => setBreed(target.value)}
              placeholder="Raça"
              name="breed"
              required="required"
              value={breed}
            />
          </div>

          <div className="form-field">
            Nome do responsável
            <Field
              className="field"
              onChange={({ target }) => setOwner(target.value)}
              placeholder="Dono do pet"
              name="owner"
              required="required"
              value={owner}
            />
          </div>
          <div className="form-field">
            Telefone do responsável
            <Field
              render={() => (
                <InputMask
                  className="field"
                  mask="(999) 99999-9999"
                  placeholder="Número com DDD"
                  type="text"
                  onChange={({ target }) => {
                    setPhone(target.value.replace(/\D/g, ''));
                  }}
                  value={phone}
                  name="phone"
                  required="required"
                />
              )}
            />
          </div>
          <div className="">
            {errorUrl ? 'URL INVALIDA' : 'URL da foto do Pet'}
            <Field
              className="field url"
              onChange={({ target }) => setImgUrl(target.value)}
              placeholder="URL da foto do Pet"
              name="img_url"
              required="required"
              value={img}
              onBlur={() => validateUrl(img)}
            />
          </div>
          <div>
            <Button type="submit">{loading ? 'Loading' : 'Adicionar'}</Button>
          </div>
        </Div>
      </Form>
    </Formik>
  );
}
