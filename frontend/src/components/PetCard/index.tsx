"use client";

import React, { useState } from "react";
import styles from "./petcard.module.css";
import dogIcon from "../../../public/dogIcon.svg";
import catIcon from "../../../public/catIcon.svg";
import petIcon from "../../../public/petIcon.png";
import userIcon from "../../../public/userIcon.png";
import raceIcon from "../../../public/raceIcon.svg";
import phoneIcon from "../../../public/phoneIcon.svg";
import dateIcon from "../../../public/dateIcon.svg";
import editIcon from "../../../public/editIcon.svg";
import removeIcon from "../../../public/removeIcon.svg";
import iPet from "./iPet";
import Image from "next/image";
import { Button, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { motion } from "framer-motion";
import { formattedDate, formattedPhone } from "./utils";
import EditPetModal from "../EditPetModal";
import dayjs, { Dayjs } from "dayjs";
import RemovePetModal from "../RemovePetModal";

export default function PetCard({
  id,
  name,
  animal,
  race,
  owner,
  phone,
  birthdate,
}: iPet) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openRemove, setOpenRemove] = useState(false);

  const openEditModal = () => {
    setOpenEdit(true);
  };

  const closeEditModal = () => {
    setOpenEdit(false);
  };

  const openRemoveModal = () => {
    setOpenRemove(true);
  };

  const closeRemoveModal = () => {
    setOpenRemove(false);
  };

  return (
    <div className={styles.petcard}>
      <Button
        key={id}
        variant="contained"
        onClick={() => setIsExpanded(!isExpanded)}
        className={!isExpanded ? styles.card : styles.cardActived}
      >
        <Image
          src={animal.toLowerCase() === "cachorro" ? dogIcon : catIcon}
          alt="Pet Icon"
        />

        <div>
          <div className={styles.data}>
            <Image src={petIcon} alt="Icon" />

            <p> {name} </p>
          </div>

          <div className={styles.data}>
            <Image src={userIcon} alt="Icon" />

            <p> {owner} </p>
          </div>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isExpanded ? <ExpandLess /> : <ExpandMore />}
        </motion.div>
      </Button>

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.menu}
        >
          <Typography>
            <div className={styles.data}>
              <Image src={raceIcon} alt="Race Icon" />
              Raça: {race}
            </div>
            <div className={styles.data}>
              <Image src={phoneIcon} alt="Phone Icon" />
              Telefone: {formattedPhone(phone.toString())}
            </div>
            <div className={styles.data}>
              <Image src={dateIcon} alt="Race Icon" />
              Idade: {} {formattedDate(birthdate).toString()}
            </div>
          </Typography>
          <Button className={styles.editButton} onClick={openEditModal}>
            <p className={styles.textGradiente}>
              <Image src={editIcon} alt="Edit Icon" />
              Editar
            </p>
          </Button>
          <EditPetModal open={openEdit} onClose={closeEditModal} petData={{ id, name, race, animal, owner, phone, birthdate: dayjs(birthdate) }} />
          
          <Button className={styles.removeButton} onClick={openRemoveModal}>
            <Image src={removeIcon} alt="Edit Icon" />
            Remover
          </Button>
          <RemovePetModal open={openRemove} onClose={closeRemoveModal} petData={{ id, name, race, animal, owner, phone, birthdate: dayjs(birthdate) }}/>
        </motion.div>
      )}
    </div>
  );
}
