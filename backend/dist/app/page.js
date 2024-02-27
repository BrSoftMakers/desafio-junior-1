"use client";
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const header_1 = require("@/components/Header/header");
const searchForm_1 = require("@/components/SearchForm/searchForm");
const modal_1 = require("@/components/ModalRegister/modal");
const petList_1 = require("@/components/PetList/petList");
const Page = () => {
    const [pets, setPets] = (0, react_1.useState)([]);
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        fetch("http://localhost:3000/pets")
            .then((response) => response.json())
            .then((data) => setPets(data))
            .catch((error) => console.error("Error fetching pets:", error));
    }, []);
    const handleAddPet = (newPet) => {
        setPets((prevPets) => [...prevPets, newPet]);
        setModalOpen(false);
    };
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    const handleSearch = (term) => {
        setSearchTerm(term);
    };
    return (<div>
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet"/>
      <header_1.default />
      <main>
        <searchForm_1.default handleOpenModal={handleOpenModal} onAddPet={handleAddPet} onSearch={handleSearch}/>
        {modalOpen && (<modal_1.default onAddPet={handleAddPet} onClose={handleCloseModal}/>)}

        <petList_1.default pets={pets} setPets={setPets} searchTerm={searchTerm}/>
      </main>
    </div>);
};
exports.default = Page;
//# sourceMappingURL=page.js.map