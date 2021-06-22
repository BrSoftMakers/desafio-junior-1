import React, { useState, useEffect } from "react";
import styles from '../../styles/Home.module.css'
import Header from '../components/header';
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import Link from 'next/link';
import { useMutation, gql, useQuery } from 'urql';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { setStoreAnimais, setStoreAnimal } from '../store/actions/index';

const ANIMAIS_QUERY = gql`   
  query {
    animais {
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

const valor = [];

export default function Home() {

  const useStyles =  makeStyles(theme => ({
    divCenter: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper: {
      height: "75vh",
      width: "90vw",
      display: "flex",
      flexDirection: 'column',
      //justifyContent: 'center',
      //alignItems: 'center',
      marginTop: '2vh',
    },
    divInfos: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: '10vh',
    },
    buttonAdicionar: {

    },
    divListPet: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    divListPets: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    divListPetPage: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '5vh',
    },
    paperList: {
      height: "17vh",
      width: "17vw",
      marginTop: '4vh',
      marginLeft: '4vw',
      marginRight: '4vw',
      display: "flex",
      flexDirection: 'column',
    },
    divListInfos: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '1vh',
    },
    divListButton: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '2vh',
    },
  }));

  const classes = useStyles();

  const pets = useSelector((state) => state.animais)
  const dispatch = useDispatch()
  const router = useRouter();

  const [result, reexecuteQuery] = useQuery({
    query: ANIMAIS_QUERY,
  });

  const { data, fetching, error } = result;

  const [count, setCount] = useState(1);
  const [animais, setAnimais] = useState(valor);
  const [pageAnimais, setPageAnimais] = useState(valor);
  const [page, setPage] = useState(1);

  const paginationManager = (petsArray) => {
		setCount(Math.ceil(petsArray.length / 6))
		let array = []
		let animaisFinal = []
		let arrayAnimais = [...petsArray]
		for (let i = 0; i < Math.ceil(petsArray.length / 6); i++) {
			array = arrayAnimais.splice(0, 6)
			animaisFinal.push(array)
		}
		setAnimais(animaisFinal[0] ? animaisFinal[0] : [])
		setPageAnimais(animaisFinal)
	}

  const handleChangePage = (event, value) => {
		setPage(value);
		setAnimais(pageAnimais[value - 1]);
	};

  const handleChangeVer = () => {
    dispatch(setStoreAnimais(data.animais));
    paginationManager(data.animais);
  }

  const handleChangeView = (id) => {
    let auxanimal = {};
    for (let i = 0; i < pets.length ; i++) {
			if(pets[i].id === id){
        auxanimal = pets[i];
      }
		}
    dispatch(setStoreAnimal(auxanimal));
    router.push({
      pathname: '/view-pet',
      query: { pid: post.id },
    })
  }

  //async function fetchData(value) {
    //paginationManager(value);
  async function fetchData() {
		//paginationManager(pets);
	}

	useEffect(() => {
    //console.log(data.animais)
		//fetchData(data.animais);
    fetchData();
	}, []);

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={classes.divCenter}>
        <Paper className={classes.paper} elevation={3} >
          <div className={classes.divInfos}>
            <div>
              <Typography variant="h5">
                Lista dos pets
              </Typography>
            </div>
            <div>
              <Button variant="contained" color="secondary" onClick={handleChangeVer}>Ver Pet</Button>
            </div>
            <div>
              <Link href="/create-pet">
                <Button variant="contained" color="secondary">Adicionar Pet</Button>
              </Link>
            </div>
          </div>
          <div className={classes.divListPet}>
            <div className={classes.divListPets}>
              {animais.map((value, index) => (
                <Paper 
                  className={classes.paperList} 
                  key={index} 
                  elevation={3} 
                >
                  <div className={classes.divListInfos}>
                    <div>{value.nome}</div>
                    <div>{value.tipo}</div>
                  </div>
                  <div className={classes.divListButton}>
                    <Button className={classes.buttonAdicionar} variant="contained" color="secondary" onChange={() => handleChangeView(value.id)}>Ver</Button>
                  </div>
                </Paper>
              ))}
            </div>
            <div className={classes.divListPetPage}>
              <Pagination count={count} page={page} onChange={handleChangePage} />
            </div>
          </div>
        </Paper>
      </div>
    </div>
  )
}
