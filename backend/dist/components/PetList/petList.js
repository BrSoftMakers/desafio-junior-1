"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const petList_module_css_1 = require("./petList.module.css");
const fa_1 = require("react-icons/fa");
const react_1 = require("react");
const modalRemove_1 = require("../ModalRemove/modalRemove");
const modalEdit_1 = require("../ModalEdit/modalEdit");
const PetList = ({ searchTerm }) => {
    const [pets, setPets] = (0, react_1.useState)([]);
    const [activeIndex, setActiveIndex] = (0, react_1.useState)(null);
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const [selectedPetIndex, setSelectedPetIndex] = (0, react_1.useState)(-1);
    const [modalType, setModalType] = (0, react_1.useState)("edit");
    (0, react_1.useEffect)(() => {
        fetch("http://localhost:3000/pets")
            .then((response) => response.json())
            .then((data) => setPets(data))
            .catch((error) => console.error("Error fetching pets:", error));
    }, []);
    const toggleActive = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    const openModal = (index, type) => {
        setModalOpen(true);
        const petIndex = indexOfFirstPet + index;
        setSelectedPetIndex(petIndex);
        setModalType(type);
    };
    const closeModal = () => {
        setModalOpen(false);
        setSelectedPetIndex(-1);
    };
    const handleRemoveItem = () => {
        if (selectedPetIndex !== -1) {
            const selectedPet = filteredPets[selectedPetIndex];
            const updatedPets = pets.filter((pet) => pet.id !== selectedPet.id);
            setPets(updatedPets);
            console.log("Pet removido:", selectedPet);
            setSelectedPetIndex(-1);
        }
        closeModal();
    };
    const handleEditItem = (editedPet) => {
        if (selectedPetIndex !== -1) {
            const selectedPet = filteredPets[selectedPetIndex];
            const updatedPets = pets.map((pet) => pet.id === selectedPet.id ? editedPet : pet);
            setPets(updatedPets);
            const updatedIndex = indexOfFirstPet +
                filteredPets.findIndex((pet) => pet.id === editedPet.id);
            if (updatedIndex !== -1) {
                const updatedPage = Math.ceil((updatedIndex + 1) / petsPerPage);
                setCurrentPage(updatedPage);
            }
            console.log("Pet editado:", selectedPet);
            setSelectedPetIndex(-1);
        }
        closeModal();
    };
    const calculateAge = (birthdate) => {
        const today = new Date();
        const birthDate = new Date(birthdate);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    const formatBirthdate = (birthdate) => {
        const birthDate = new Date(birthdate);
        birthDate.setDate(birthDate.getDate() + 1);
        return birthDate.toLocaleDateString("pt-BR");
    };
    const filteredPets = pets.filter((pet) => pet.nome.toLowerCase().includes(searchTerm.toLowerCase()));
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const [petsPerPage] = (0, react_1.useState)(16);
    const indexOfLastPet = currentPage * petsPerPage;
    const indexOfFirstPet = indexOfLastPet - petsPerPage;
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const currentPets = filteredPets.slice(indexOfFirstPet, indexOfLastPet);
    (0, react_1.useEffect)(() => {
        if (selectedPetIndex !== -1 && selectedPetIndex >= filteredPets.length) {
            setSelectedPetIndex(-1);
        }
    }, [filteredPets]);
    (0, react_1.useEffect)(() => {
        if (selectedPetIndex !== -1) {
            const selectedPetId = pets[selectedPetIndex]?.id;
            const updatedIndex = filteredPets.findIndex((pet) => pet.id === selectedPetId);
            if (updatedIndex === -1) {
                setSelectedPetIndex(-1);
            }
        }
    }, [pets, filteredPets]);
    const totalPages = Math.ceil(filteredPets.length / petsPerPage);
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    return (<section className={petList_module_css_1.default.container}>
      {currentPets.map((pet, index) => (<div key={pet.id} className={`${petList_module_css_1.default.item} ${activeIndex === index ? petList_module_css_1.default.activeItem : ""}`}>
          <div className={petList_module_css_1.default.circle}>
            <img src={`/${pet.animal.toLowerCase()}.svg`} alt=""/>
          </div>
          <div className={petList_module_css_1.default.info}>
            <span>
              <img src="/bone.svg" alt=""/>
              <p>{pet.nome}</p>
            </span>
            <span>
              <img src="/userLogo.svg" alt=""/>
              <p>{pet.dono}</p>
            </span>
          </div>
          <img className={petList_module_css_1.default.arrow_icon} src="/arrow.svg" alt="" onClick={() => toggleActive(index)}/>

          {activeIndex === index && (<div className={petList_module_css_1.default.active}>
              <span>
                <img src="/dna.svg" alt=""/>
                Raça: {pet.raca}
              </span>
              <span>
                <img src="/telephone.svg" alt=""/>
                Telefone: {pet.telefone}
              </span>
              <span>
                <img src="/calendar.svg" alt=""/>
                Idade: {calculateAge(pet.dataNascimento)} Anos (
                {formatBirthdate(pet.dataNascimento)})
              </span>

              <button className={petList_module_css_1.default.button_change} onClick={() => openModal(index, "edit")}>
                <img src="/change.svg" alt=""/>
                Editar
              </button>
              <button className={petList_module_css_1.default.button_remove} onClick={() => openModal(index, "remove")}>
                <img src="/trash.svg" alt=""/>
                Remover
              </button>
            </div>)}
        </div>))}
      {modalOpen && modalType === "remove" && (<modalRemove_1.default petData={pets[selectedPetIndex]} onClose={closeModal} onRemoveItem={handleRemoveItem}/>)}
      {modalOpen && modalType === "edit" && (<modalEdit_1.default petData={pets[selectedPetIndex]} onClose={closeModal} onEditItem={handleEditItem} petsPerPage={petsPerPage} setCurrentPage={setCurrentPage} pets={pets}/>)}
      {totalPages > 1 && (<div className={petList_module_css_1.default.pagination}>
          <button className={petList_module_css_1.default.paginationButton} disabled={isFirstPage} onClick={() => paginate(currentPage - 1)}>
            <fa_1.FaRegArrowAltCircleLeft className={petList_module_css_1.default.paginationButtonIcon}/>
          </button>

          <span>
            {currentPage} de {totalPages}
          </span>

          <button className={petList_module_css_1.default.paginationButton} disabled={isLastPage} onClick={() => paginate(currentPage + 1)}>
            <fa_1.FaRegArrowAltCircleRight className={petList_module_css_1.default.paginationButtonIcon}/>
          </button>
        </div>)}
    </section>);
};
exports.default = PetList;
//# sourceMappingURL=petList.js.map