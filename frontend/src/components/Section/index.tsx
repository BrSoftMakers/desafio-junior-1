"use client";

import { useEffect, useState } from "react";
import PetCard from "../PetCard";
import styles from "./section.module.css";
import { Box, Grid2 as Grid, IconButton, Typography } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import iSection from "./iSection";

export default function Section({ pets }: iSection) {
  const [page, setPage] = useState(1);
  const [petsPerPage, setPetsPerPage] = useState(20);

  const totalPages = Math.ceil(pets.length / petsPerPage);
  const startIndex = (page - 1) * petsPerPage;
  const endIndex = startIndex + petsPerPage;
  const petsToShow = pets.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  useEffect(() => {
    const updatePetsPerPage = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setPetsPerPage(4); 
      } else if (width <= 768) {
        setPetsPerPage(8); 
      } else if (width <= 1366) {
        setPetsPerPage(12); 
      } else {
        setPetsPerPage(20); 
      }
    };

    updatePetsPerPage();
    window.addEventListener("resize", updatePetsPerPage);

    return () => {
      window.removeEventListener("resize", updatePetsPerPage);
    };
  }, []);

  const fillEmptySlots = () => {
    const emptySlots = petsPerPage - petsToShow.length;
    return Array.from({ length: emptySlots }, (_, index) => (
      <Grid key={`empty-${index}`} size={{ xs: 12, sm: 6, md: 4, lg: 2.5 }}>
        <div style={{ height: "100%" }}></div>
      </Grid>
    ));
  };

  return (
    <Box className={styles.box}>
      <Grid
        container
        spacing={3}
        columns={12.5}
        alignItems="start"
        justifyContent="start"
        className={styles.grid}
      >
        {petsToShow.map((pet) => (
          <Grid key={pet.id} size={{ xs: 12, sm: 6, md: 4, lg: 2.5 }}>
            <PetCard {...pet} />
          </Grid>
        ))}
        {fillEmptySlots()}
      </Grid>

      <Box
        sx={{
          mt: 3,
        }}
        className={styles.pagination}
      >
        <IconButton onClick={handlePrevPage} disabled={page === 1}>
          <ArrowBackIos sx={{ color: "white" }} />
        </IconButton>

        <Typography sx={{ color: "white", fontSize: "18px", mx: 2 }}>
          {page} de {totalPages}
        </Typography>

        <IconButton onClick={handleNextPage} disabled={page === totalPages}>
          <ArrowForwardIos sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
