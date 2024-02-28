"use client"
/* eslint-disable @next/next/no-img-element */

import { CreateModal } from "@/components/CreateModal";
import { FormCreateModal } from "@/components/FormCreateModal/FormCreateModal";
import { PetsContainer } from "@/components/PetsContainer/PetsContainer"
import styles from "./page.module.css";
import { useState } from "react";





// eslint-disable-next-line @next/next/no-async-client-component
export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);  //ESTADOS PARA CONTROLAR SE ESTÁ open OU close

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);



  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <img src="/images/logo.png" alt="Logo da softpet" />
        </nav>
        <div className={styles.searchAndCreatBox}>
          <div className={styles.searchInput}>
            <img src="/images/searchIcon.png" alt="" />
            <input type="text" />
            <button className={styles.searchButton}>Buscar</button>
          </div>
          <div>

            <button onClick={handleOpenModal} className={styles.cadastrarButton}>
              <img src="/images/cadastrarIcon.png" alt="" />
              <p>Cadastrar</p>
            </button >
          </div>
        </div>
      </div>


      {/* CREATE MODAL */}
      <CreateModal isOpen={isModalOpen} onClose={handleCloseModal} >
        <div className={styles.headerModal}>
          <div className={styles.headerModalText}>
            <div className={styles.headerModalImage}>
              <img src="/images/cadastrarIcon_2.png" alt="" />
            </div>
            <h1>Cadastrar</h1>
          </div>
          <button onClick={handleCloseModal} className={styles.modalClosseButton}>x</button>
        </div>


        <FormCreateModal onClose={handleCloseModal} />
      </CreateModal>


      {/* PETS CONTAINER */}
      <section className={styles.container}>
        <div className={styles.data}> {/* transformar isso em Componente */}
          <PetsContainer/>
        </div>

      </section>


    </main>
  );
}
