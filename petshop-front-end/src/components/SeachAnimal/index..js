import React, { useEffect, useState } from "react";
import Input from "../Input/index";
import { getPets } from "../../services/pets"; // Importe a função getPets da service pets

function SearchAnimal() {
    const [pets, setPets] = useState([]);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchPetsData = async () => {
            try {
                const petsData = await getPets(); // Obtenha a lista de animais usando a função getPets
                setPets(petsData);
            } catch (error) {
                console.error("Erro ao obter os animais:", error);
            }
        };

        fetchPetsData();
    }, []);

    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();

        if (searchText === "") {
            setSearchResults([]); // Define os resultados da pesquisa como vazios
        } else {
            const searchResults = pets.filter((pet) =>
                pet.name.toLowerCase().includes(searchText)
            );
            setSearchResults(searchResults);
        }
    };

    return (
        <section>
            <div className="flex items-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-#0588D1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                </svg>
                <Input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Buscar"
                    className="px-3 py-2 rounded-xl ml-2 h-10 bg-gray-200"
                />
            </div>
            <div className="flex justify-center flex-wrap">
                {searchResults.map((pet) => (
                    <div
                        key={pet.id}
                        className="w-64 mx-auto mb-4 p-4 bg-white rounded-md shadow-md cursor-pointer"
                    >
                        <p className="text-black truncate">{pet.name}</p>
                        <p className="text-gray-500">{pet.breed}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SearchAnimal;