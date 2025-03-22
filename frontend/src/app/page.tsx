"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import iPet from "../components/PetCard/iPet";
import Section from "../components/Section";
import styles from "./page.module.css";

export default function Home() {
  const [pets, setPets] = useState<iPet[]>([]);
  const [filteredPets, setFilteredPets] = useState<iPet[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:3001/pets");
        if (!response.ok) throw new Error("Erro ao buscar os pets");
        const data = await response.json();
        if (isMounted) setPets(data);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) {
          setTimeout(fetchPets, 1000);
        }
      }
    };

    fetchPets();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={styles.page}>
      <Header petsData={pets} setFilteredPets={setFilteredPets} setIsFiltering={setIsFiltering} />
      <Section pets={isFiltering ? filteredPets : pets} />
    </div>
  );
}
