import { ReactElement, createContext, useState } from "react";
import { Pet } from "../models"
import debounce from "debounce";
import { getAllPets } from "../api";

type PetsContextType = {
    pets: Pet[];
    currentPage: number;
    totalPages: number;
    getAllPetsData: (page: number, query: string) => void;
}

interface PetsProviderInterface {
    children: ReactElement
}

export const PetsContext = createContext<PetsContextType | undefined>(undefined);

export const PetsProvider = ({ children }: PetsProviderInterface) => {
    const [ pets, setPets ] = useState<Pet[]>([]);
    const [ currentPage, setCurrentPage ] = useState<number>(1);
    const [ totalPages, setTotalPages ] = useState<number>(1);

    const getAllPetsData = debounce( async(page: number, query: string) => {
        try {
            const data = await getAllPets(page, query);
            setPets(data.content);
            setTotalPages(data.totalPages)
        } catch(error) {
            console.log(error);
        }
    })

    return (
        <PetsContext.Provider value={{ pets, currentPage, totalPages, getAllPetsData}}>
            {children}
        </PetsContext.Provider>
    )
}