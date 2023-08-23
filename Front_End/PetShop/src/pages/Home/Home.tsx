import React from 'react';

import homeImage from '../../image/PetShop.png';

import styles from './Home.module.css';

const Home: React.FC = () => {
    return (
        <main className={styles.home}>
            <div className={styles.title}>
                <h1>Seu pet merece o melhor: <br /> descubra a felicidade no nosso petshop!</h1>
                <p>Site desafio para SoftMaker</p>
            </div>
            <div className={styles.image}>
                <img src={homeImage} alt="PetShop" />
            </div>

        </main>
    )
}

export default Home;