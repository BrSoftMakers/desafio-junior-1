"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const modalEdit_module_css_1 = require("./modalEdit.module.css");
const io5_1 = require("react-icons/io5");
const ModalEdit = ({ onClose, onEditItem, petData, petsPerPage, setCurrentPage, pets }) => {
    const [formData, setFormData] = (0, react_1.useState)(petData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleRadioChange = (e) => {
        const { value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            animal: value,
        }));
    };
    const formatPhoneNumber = (value) => {
        const phoneNumber = value.replace(/\D/g, "");
        const match = phoneNumber.match(/^(\d{2})(\d{1})(\d{4})(\d{4})$/);
        if (match) {
            return `(${match[1]}) ${match[2]} ${match[3]}-${match[4]}`;
        }
        return value;
    };
    const handlePhoneChange = (e) => {
        const { value } = e.target;
        const formattedValue = formatPhoneNumber(value);
        setFormData((prevState) => ({
            ...prevState,
            telefone: formattedValue,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/pets/${petData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Failed to update pet");
            }
            onEditItem(formData);
            const updatedIndex = pets.findIndex((pet) => pet.id === petData.id);
            const currentPageIndex = Math.floor(updatedIndex / petsPerPage);
            setCurrentPage(currentPageIndex + 1);
            onClose();
        }
        catch (error) {
            console.error("Error updating pet:", error);
        }
    };
    return (<div className={modalEdit_module_css_1.default.register_animal_container}>
      <div className={modalEdit_module_css_1.default.register_animal}>
        <div className={modalEdit_module_css_1.default.header_animal}>
        <div className={modalEdit_module_css_1.default.div_circle}>
        <img src="/changeFFF.svg" alt=""/>
          </div>
          <h1>Editar</h1>
          <button className={modalEdit_module_css_1.default.button_icon} onClick={onClose}>
            <io5_1.IoClose />
          </button>
        </div>

        <form className={modalEdit_module_css_1.default.form_modal} onSubmit={handleSubmit}>
          <div className={modalEdit_module_css_1.default.form_section}>
            <div>
              <label>
                <img className={modalEdit_module_css_1.default.bone} src="/bone.svg" alt=""/> Nome
              </label>
              <input type="text" placeholder="Nome Sobrenome" name="nome" value={formData.nome} onChange={handleChange}/>
            </div>
            <div>
              <label>
                <img src="/userLogo.svg" alt=""/> Dono
              </label>
              <input type="text" placeholder="Nome Sobrenome" name="dono" value={formData.dono} onChange={handleChange}/>
            </div>
            <div>
              <label>
                <img className={modalEdit_module_css_1.default.phone} src="/telephone.svg" alt=""/>
                Telefone
              </label>
              <input type="text" name="telefone" value={formData.telefone} onChange={handlePhoneChange} placeholder="(00) 0 0000-0000"/>
            </div>
          </div>
          <div className={modalEdit_module_css_1.default.form_section}>
            <div>
              <label>
                <img className={modalEdit_module_css_1.default.dna} src="/dna.svg" alt=""/>
                Animal
              </label>
              <div className={modalEdit_module_css_1.default.radio}>
                <span>
                  <input type="radio" id="cachorro" name="animal" value="Cachorro" checked={formData.animal === "Cachorro"} onChange={handleRadioChange}/>
                  <label>Cachorro</label>
                </span>
                <span>
                  <input type="radio" id="gato" name="animal" value="Gato" checked={formData.animal === "Gato"} onChange={handleRadioChange}/>
                  <label>Gato</label>
                </span>
              </div>
            </div>
            <div>
              <label>
                <img className={modalEdit_module_css_1.default.dna} src="/dna.svg" alt=""/>
                Raça
              </label>
              <input type="text" placeholder="Raça" name="raca" value={formData.raca} onChange={handleChange}/>
            </div>
            <div>
              <label>
                <img className={modalEdit_module_css_1.default.calendar} src="/calendar.svg" alt=""/>
                Nascimento <span>(Aproximado)</span>
              </label>
              <input type="date" placeholder="22/08/2020" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange}/>
            </div>
          </div>
          <div className={modalEdit_module_css_1.default.register_buttons}>
            <button onClick={onClose} className={modalEdit_module_css_1.default.back_button}>
              <io5_1.IoArrowBackCircleOutline size={25}/>
              Voltar
            </button>
            <button type="submit" className={modalEdit_module_css_1.default.button_register_modal}>
            <img src="/changeFFF.svg" alt=""/>
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = ModalEdit;
//# sourceMappingURL=modalEdit.js.map