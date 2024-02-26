"use client"

import { useEffect } from "react";
import Header from "./components/header";
import MainContent from "./components/main-content";

import { useGlobalContext } from "./context/store"
import { getAllClients } from "@/util/endypoints";

export default function Home() {
  const { setDataClients } = useGlobalContext();

  useEffect(() => {
    const getClients = async () => {
      const clients = await getAllClients();
      setDataClients(clients);
    }
    getClients();
  },[]);

  return (
    <>
      <Header/>
      <MainContent/>
    </>
  );
}
