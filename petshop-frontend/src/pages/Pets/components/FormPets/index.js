import React from 'react';
import { Formik } from 'formik';
import {
  Input,
  Button,
} from '@chakra-ui/react'

import './style.css';

const FormPets = ({
  onClose,
  onSubmit,
  initialValues = { nickname: '', birthday: '', type: '', breed: '' },
  clientId,
}) => (
  <div>
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        onSubmit({ ...values, clientId: Number(clientId), birthday: new Date(values.birthday) })
        onClose()
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input placeholder='Nome'
            type="text"
            name="nickname"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.nickname}
          />
          {errors.nickname && touched.nickname && errors.nickname}
          <Input placeholder='birthday'
            type="date"
            name="birthday"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.birthday ? new Date(values.birthday).toISOString().split('T')[0] : ''}
          />
          {errors.birthday && touched.birthday && errors.birthday}
          <Input placeholder='Gato ou Cachorro'
            type="text"
            name="type"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.type}
          />
          {errors.type && touched.type && errors.type}
          <Input placeholder='Raça'
            type="text"
            name="breed"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.breed}
          />
          {errors.breed && touched.breed && errors.breed}

          <div className='action-buttons-custom'>
            <Button variant={'outline'} onClick={onClose} disabled={isSubmitting}>
              Cancelar
            </Button>
            <Button colorScheme={'blue'} type="submit" disabled={isSubmitting}>
              Salvar
            </Button>
          </div>

        </form>
      )}
    </Formik>
  </div>
);

export default FormPets;