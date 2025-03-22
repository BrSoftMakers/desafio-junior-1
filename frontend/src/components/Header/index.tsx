"use client";

import Image from "next/image";
import styles from "./header.module.css";
import logo from "../../../public/logo.svg";
import search from "../../../public/Group 42.png";
import registerIconSmall from "../../../public/registerIconSmall.png";
import { useState } from "react";
import RegisterNewPetModal from "../RegisterNewPetModal";
import iHeader from "./iHeader";

export default function Header({ petsData, setFilteredPets, setIsFiltering }: iHeader) {
  const [modalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const filterPets = (query: string) => {
    if (!query) {
      setFilteredPets(petsData);
    } else {
      setFilteredPets(
        petsData.filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterPets(query);

    if (e.target.value.length != 0) {
      setIsFiltering(true)
    } else {
      setIsFiltering(false)
    }
  };

  const handleSearchClick = () => {
    filterPets(searchQuery);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <header className={styles.header}>
      <Image src={logo} alt="Logo" />

      <div className={styles.actions}>
        <div className={styles.searchBar}>
          <Image src={search} alt="Search Icon" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <button className={styles.searchButton} onClick={handleSearchClick}>
            Pesquisar
          </button>
        </div>

        <div>
          <button onClick={openModal} className={styles.registerButton}>
            <Image src={registerIconSmall} alt="Small register Icon" width={20} />
            Cadastrar
          </button>
          <RegisterNewPetModal open={modalOpen} onClose={closeModal} />
        </div>
      </div>
    </header>
  );
}