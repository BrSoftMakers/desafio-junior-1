"use client"

import Image from "next/image";
import { useState } from "react";

import CardPet from "./card-pet";
import afterArrow from "../assets/after-arrow.svg";
import beforeArrow from "../assets/before-arrow.svg";


const meuArray = () => {
  const array = [];
  for (let i = 1; i <= 50; i++) {
    array.push(i);
  }
  return array;
}

const MainContent = () => {
  const [page, setPage] = useState(1);

  const nextPage = () => {
    const totalPages = Math.ceil(meuArray().length / 16);
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const beforePage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const startIndex = (page - 1) * 16;
  const endIndex = startIndex + 16;

  return (
    <div>
      <main className="flex flex-wrap m-3">
        {
          meuArray().slice(startIndex, endIndex).map((item) => (
            <CardPet key={item} ownerName="salsinha" petName="doguinho" />
          ))
        }
      </main>
      <footer className="flex justify-end">
        <div className="flex p-10 my-10 gap-2">
          <button onClick={beforePage}>
            <Image src={beforeArrow} alt="before-arrow" />
          </button>
            <p>{page} de {Math.ceil(meuArray().length / 16)}</p>
          <button onClick={nextPage}>
            <Image src={afterArrow} alt="after-arrow" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default MainContent;
