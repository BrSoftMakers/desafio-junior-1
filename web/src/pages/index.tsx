import React, { useState, useEffect } from "react";
import styles from '../../styles/Home.module.css';
import { Header } from '../components/header';
import { Paper, Typography, Button } from "@material-ui/core";
import { makeStyles , withStyles } from '@material-ui/core/styles';

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
    titleText: {

    },
    buttonAdicionar: {

    },
    divListPet: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap',
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

  const listPets = [
    {
        id: 1,
        name: 'Pet 1',
    },
    {
        id: 2,
        name: 'Pet 2',
    },
    {
        id: 3,
        name: 'Pet 3',
    },
    {
        id: 4,
        name: 'Pet 4',
    },
    {
        id: 5,
        name: 'Pet 5',
    },
    {
        id: 6,
        name: 'Pet 6',
    },
  ];

  const [pets, setPets] = useState(listPets);

  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={classes.divCenter}>
        <Paper className={classes.paper} elevation={3} >
          <div className={classes.divInfos}>
            <div>
              <Typography variant="h5" className={classes.titleText}>
                Lista dos pets
              </Typography>
            </div>
            <div>
              <Button className={classes.buttonAdicionar} variant="contained" color="secondary">Adicionar Pet</Button>
            </div>
          </div>
          <div className={classes.divListPet}>
            {pets.map((text, index) => (
              <Paper 
                className={classes.paperList} 
                key={index} 
                elevation={3} 
              >
                <div className={classes.divListInfos}>
                  <div>{text.name}</div>
                  <div>raca</div>
                </div>
                <div className={classes.divListButton}>
                  <Button className={classes.buttonAdicionar} variant="contained" color="secondary">Ver</Button>
                </div>
              </Paper>
            ))}
          </div>
        </Paper>
      </div>
    </div>
  )
}
