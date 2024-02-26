"use client"

import Image from "next/image";
import { useState } from "react";

import CardPet from "./card-pet";
import afterArrow from "../assets/after-arrow.svg";
import beforeArrow from "../assets/before-arrow.svg";
import { useGlobalContext } from "../context/store";

const MainContent = () => {
  const {dataClients, filtered} = useGlobalContext()
  const [page, setPage] = useState(1);
  const data = filtered ? filtered : dataClients;

  const startIndex = (page - 1) * 16;
  const endIndex = startIndex + 16;
  const pageInterval = 16
  const totalPages = Math.ceil(data.length / pageInterval);



  const beforePage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };
  console.log('data:: ', data)
  return (
    <div>
      <main className="flex flex-wrap m-3">
        {
          data.slice(startIndex, endIndex).map((client) => (
            <CardPet key={client.id} ownerName={client.owner} petName={client.name} />
          ))
        }
      </main>
      <footer className="flex justify-end">
        <div className="flex p-10 my-10 gap-2">
          <button onClick={beforePage}>
            <Image src={beforeArrow} alt="before-arrow" />
          </button>
            <p>{page} de {totalPages}</p>
          <button onClick={nextPage}>
            <Image src={afterArrow} alt="after-arrow" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default MainContent;
