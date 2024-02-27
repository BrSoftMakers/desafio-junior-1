"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const searchForm_module_css_1 = require("./searchForm.module.css");
const fi_1 = require("react-icons/fi");
const modal_1 = require("../ModalRegister/modal");
const SearchForm = ({ onAddPet, onSearch }) => {
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const handleSearch = () => {
        onSearch(searchTerm);
    };
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleOpenModal = () => {
        setModalOpen(true);
    };
    const handleCloseModal = () => {
        setModalOpen(false);
    };
    return (<div className={searchForm_module_css_1.default.form}>
      <fi_1.FiSearch className={searchForm_module_css_1.default.icon}/>

      <div className={searchForm_module_css_1.default.input_container}>
        <input type="text" value={searchTerm} onChange={handleChange}/>
        <button onClick={handleSearch}>Pesquisar</button>
      </div>

      <button onClick={handleOpenModal} className={searchForm_module_css_1.default.button_register}>
        <fi_1.FiPlusCircle className={searchForm_module_css_1.default.icon_plus} size={23}/>
        Cadastrar
      </button>

      {modalOpen && (<modal_1.default onAddPet={onAddPet} onClose={handleCloseModal}/>)}
    </div>);
};
exports.default = SearchForm;
//# sourceMappingURL=searchForm.js.map