import React from 'react';
import { Formik } from 'formik';
import {
  Input,
  Button,
} from '@chakra-ui/react'


import './style.css';

const Form = ({
  onClose,
  onSubmit,
  initialValues = { name: '', email: '', address: '' }
}) => (
  <div>

    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true)
        onSubmit(values)
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
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          {errors.name && touched.name && errors.name}
          <Input placeholder='Email'
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <Input placeholder='Endereço'
            type="text"
            name="address"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.address}
          />
          {errors.address && touched.address && errors.address}

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

export default Form;