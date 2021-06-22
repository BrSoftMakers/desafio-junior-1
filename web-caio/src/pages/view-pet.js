import React, { useState, useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../components/header';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from "next/router";
import Link from 'next/link';
import { useMutation, gql, useQuery } from 'urql';
import { Paper, Typography, Button, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';

const ANIMAL_QUERY = gql`   
  query ($id: Int!) {
    animal (id: $id) {
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

const DELETE_MUT = gql`
  mutation DeleteAnimal($id: Int!){
    deleteAnimal(id: $id)
  }
`;

export default function ViewPet(props) {

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
          justifyContent: 'center',
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
    const pet = useSelector((state) => state.animal)
    const { query: { value }, } = router
    const id = parseInt(value);
    console.log(id);
    console.log(value);
    console.log(pet);

    /*const [result, reexecuteQuery] = useQuery({
      query: ANIMAL_QUERY,
      variables: { id },
    });
  
    const { data, fetching, error } = result;*/

    //console.log(error);
    //console.log(data);

    //const [animal, setAnimal] = useState(data.animal);
    const [animal, setAnimal] = useState(pet);

    const [, deleteAnimal] = useMutation(DELETE_MUT);

    const handleClickExcluir = () => {
      const valorBoolean = deleteAnimal({ id: animal.id });
      console.log(valorBoolean)
      //router.push('/')
    };

    return (
      <div className={styles.container}>
        <Header></Header>
        <div className={classes.divCenter}>
          <Paper className={classes.paper} elevation={3} >
            <div className={classes.title}>
              <Typography variant="h5">
                Informações do Pet
              </Typography>
            </div>
            <div className={classes.divInputs}>
              <div className={classes.divName}>
                <TextField 
                  id="nome-pet" 
                  label="Nome do Pet" 
                  variant="outlined"
                  className={classes.name}
                  value={animal.nome}
                />
              </div>
              <div className={classes.divName}>
                <TextField 
                  id="idade" 
                  label="Idade" 
                  variant="outlined"
                  className={classes.name}
                  value={animal.idade}
                />
              </div>
              <div className={classes.divName}>
                <TextField 
                  id="tipo" 
                  label="tipo" 
                  variant="outlined"
                  className={classes.name}
                  value={animal.tipo}
                />
              </div>
              <div className={classes.divName}>
                <TextField 
                  id="raca" 
                  label="Raça" 
                  variant="outlined"
                  className={classes.name}
                  value={animal.raca}
                />
              </div>
              <div className={classes.divName}>
                <TextField 
                  id="nome-dono" 
                  label="Nome do Dono" 
                  variant="outlined"
                  className={classes.name}
                  value={animal.nomeDono}
                />
              </div>
              <div className={classes.divName}>
                <TextField 
                  id="telefone-dono" 
                  label="Telefone do Dono" 
                  variant="outlined"
                  className={classes.name}
                  value={animal.telefoneDono}
                />
              </div>
            </div>
            <div className={classes.divButton}>
              <div>
                <Link
                  href={{
                    pathname: "/updade-pet",
                    query: { value: animal.id },
                  }}
                >
                  <Button className={classes.button} variant="contained" color="secondary">Atualizar</Button>
                </Link>
              </div>
              <div>
                <Button className={classes.button} variant="contained" color="secondary" onClick={handleClickExcluir}>Excluir</Button>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    )
}