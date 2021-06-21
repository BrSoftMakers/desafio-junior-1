import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../components/header';
import { Paper, Typography, Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { useMutation, gql } from 'urql';
import { useRouter } from 'next/router';

// Formik
import { useFormik } from 'formik';

// Yup
import * as Yup from 'yup';

const TipoAnimal = gql`
    enum TipoAnimal {
        GATO
        CACHARRO
    }   
`;

const CREATER_MUT = gql`   
    mutation CreateAnimal($nome: String!, $idade: Int!, $tipo: TipoAnimal!, $raca: String!, $nomeDono: String!, $telefoneDono: String!){
        createAnimal(nome: $nome, idade: $idade, tipo: $tipo, raca: $raca, nomeDono: $nomeDono, telefoneDono: $telefoneDono) {
            id
            nome
            idade
	        tipo
            raca
            nomeDono
            telefoneDono
            createdAt
            updatedAt
        }
    }
`;

export default function CreatePet() {

  const useStyles =  makeStyles(theme => ({
    divCenter: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: {
      height: "75vh",
      width: "70vw",
      display: "flex",
      flexDirection: 'column',
      marginTop: '2vh',
    },
    divInputs: {
      display: "flex",
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    title: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '2vh',
    },
    divName: {
      margin: '2vh',
    },
    name: {

    },
    formControl: {
      width: '10vw',
      margin: '2vh',
    },
    menuItem: {

    },
    divButton: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      margin: '2vh',
    },
    button: {
      margin: '2vh',
      height: '7vh',
      width: '10vw',
    },
  }));

  const classes = useStyles();

  const router = useRouter()

  const [nomePet, setNomePet] = useState('');
  const [idade, setIdade] = useState('');
  const [tipo, setTipo] = useState('');
  const [raca, setRaca] = useState('');
  const [nomeDono, setNomeDono] = useState('');
  const [telefoneDono, setTelefoneDono] = useState('');

  const [, register] = useMutation(CREATER_MUT);

  const handleChangeCadastrar = async () => {
    const response = await register({nome: nomePet, idade: parseInt(idade), tipo: tipo, raca: raca, nomeDono: nomeDono, telefoneDono: telefoneDono})
    console.log(response)
    router.push('/')
  };
  
  const createValidationPet = Yup.object().shape({
    nomePet: Yup.string().required('Campo obrigatório!'),
    idade: Yup.number().required('Campo obrigatório!'),
    tipo: Yup.string().required('Campo obrigatório!'),
    raca: Yup.string().required('Campo obrigatório!'),
    nomeDono: Yup.string().required('Campo obrigatório!'),
    telefoneDono: Yup.string().required('Campo obrigatório!'),
  });

  const formikPet = useFormik({
    initialValues: {
        nomePet: nomePet,
        idade: idade,
        tipo: tipo,
        raca: raca,
        nomeDono: nomeDono,
        telefoneDono: telefoneDono,
    },
    onSubmit: values => {
        console.log(values);
        handleChangeCadastrar();
    },
    validationSchema: createValidationPet,
  });

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={classes.divCenter}>
        <Paper className={classes.paper} elevation={3} >
          <div className={classes.title}>
            <Typography variant="h5">
              Cadastro do Pet
            </Typography>
          </div>
          <div className={classes.divInputs}>
            <div className={classes.divName}>
              <TextField 
                id="nome-pet" 
                label="Nome do Pet" 
                variant="outlined"
                className={classes.name}
                value={formikPet.values.nomePet}
                onChange={(event) => { 
                  setNomePet(event.target.value);
                  formikPet.setFieldValue('nomePet', event.target.value);
                }}
                helperText={formikPet.errors.nomePet}
                error={Boolean(formikPet.errors.nomePet)}
              />
            </div>
            <div className={classes.divName}>
              <TextField 
                id="idade" 
                label="Idade" 
                variant="outlined"
                className={classes.name}
                value={formikPet.values.idade}
                onChange={(event) => { 
                  setIdade(event.target.value);
                  formikPet.setFieldValue('idade', event.target.value);
                }}
                helperText={formikPet.errors.idade}
                error={Boolean(formikPet.errors.idade)}
              />
            </div>
            <div>
              <FormControl variant="outlined" className={classes.formControl} error={Boolean(formikPet.errors.tipo)}>
                <InputLabel id="select-tipo-label">Tipo</InputLabel>
                  <Select
                    labelId="select-tipo-label"
                    id="select-tipo"
                    value={formikPet.values.tipo}
                    onChange={(event) => {
                      setTipo(event.target.value);
                      formikPet.setFieldValue('tipo', event.target.value);
                    }}
                    label="Tipo"
                  >
                    <MenuItem className={classes.menuItem} value='GATO'>GATO</MenuItem>
                    <MenuItem className={classes.menuItem} value='CACHORRO'>CACHORRO</MenuItem>
                  </Select>
                <FormHelperText>{formikPet.errors.tipo}</FormHelperText>
              </FormControl>
            </div>
            <div className={classes.divName}>
              <TextField 
                id="raca" 
                label="Raça" 
                variant="outlined"
                className={classes.name}
                value={formikPet.values.raca}
                onChange={(event) => { 
                  setRaca(event.target.value);
                  formikPet.setFieldValue('raca', event.target.value);
                }}
                helperText={formikPet.errors.raca}
                error={Boolean(formikPet.errors.raca)}
              />
            </div>
            <div className={classes.divName}>
              <TextField 
                id="nome-dono" 
                label="Nome do Dono" 
                variant="outlined"
                className={classes.name}
                value={formikPet.values.nomeDono}
                onChange={(event) => { 
                  setNomeDono(event.target.value);
                  formikPet.setFieldValue('nomeDono', event.target.value);
                }}
                helperText={formikPet.errors.nomeDono}
                error={Boolean(formikPet.errors.nomeDono)}
              />
            </div>
            <div className={classes.divName}>
              <TextField 
                id="telefone-dono" 
                label="Telefone do Dono" 
                variant="outlined"
                className={classes.name}
                value={formikPet.values.telefoneDono}
                onChange={(event) => { 
                  setTelefoneDono(event.target.value);
                  formikPet.setFieldValue('telefoneDono', event.target.value);
                }}
                helperText={formikPet.errors.telefoneDono}
                error={Boolean(formikPet.errors.telefoneDono)}
              />
            </div>
          </div>
          <div className={classes.divButton}>
            <Button className={classes.button} variant="contained" color="secondary" onClick={formikPet.handleSubmit}>Cadastrar</Button>
          </div>
        </Paper>
      </div>
    </div>
  )
}