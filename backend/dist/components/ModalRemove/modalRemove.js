"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const modalRemove_module_css_1 = require("./modalRemove.module.css");
const io5_1 = require("react-icons/io5");
const fi_1 = require("react-icons/fi");
const ModalRemove = ({ onClose, onRemoveItem, petData, }) => {
    const [formData, setFormData] = (0, react_1.useState)(petData);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleRadioChange = () => {
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:3000/pets/${petData.id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete pet");
            }
            onRemoveItem();
            onClose();
        }
        catch (error) {
            console.error("Error deleting pet:", error);
        }
    };
    return (<div className={modalRemove_module_css_1.default.register_animal_container}>
      <div className={modalRemove_module_css_1.default.register_animal}>
        <div className={modalRemove_module_css_1.default.header_animal}>
          <div className={modalRemove_module_css_1.default.div_circle}>
            <fi_1.FiTrash />
          </div>
          <h1>Remover</h1>
          <button className={modalRemove_module_css_1.default.button_icon} onClick={onClose}>
            <io5_1.IoClose />
          </button>
        </div>

        <form className={modalRemove_module_css_1.default.form_modal} onSubmit={handleSubmit}>
          <div className={modalRemove_module_css_1.default.form_section}>
            <div>
              <label>
                <img className={modalRemove_module_css_1.default.bone} src="/bone.svg" alt=""/> Nome
              </label>
              <input type="text" placeholder="Nome Sobrenome" name="nome" value={formData.nome} onChange={handleChange} readOnly/>
            </div>
            <div>
              <label>
                <img src="/userLogo.svg" alt=""/> Dono
              </label>
              <input type="text" placeholder="Nome Sobrenome" name="dono" value={formData.dono} onChange={handleChange} readOnly/>
            </div>
            <div>
              <label>
                <img className={modalRemove_module_css_1.default.phone} src="/telephone.svg" alt=""/>
                Telefone
              </label>
              <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="(00) 0 0000-0000" readOnly/>
            </div>
          </div>
          <div className={modalRemove_module_css_1.default.form_section}>
            <div>
              <label>
                <img className={modalRemove_module_css_1.default.dna} src="/dna.svg" alt=""/>
                Animal
              </label>
              <div className={modalRemove_module_css_1.default.radio}>
                <span>
                  <input type="radio" id="cachorro" name="animal" value="Cachorro" checked={formData.animal === "Cachorro"} onChange={handleRadioChange} readOnly/>
                  <label htmlFor="cachorro">Cachorro</label>
                </span>
                <span>
                  <input type="radio" id="gato" name="animal" value="Gato" checked={formData.animal === "Gato"} onChange={handleRadioChange} readOnly/>
                  <label htmlFor="gato">Gato</label>
                </span>
              </div>
            </div>
            <div>
              <label>
                <img className={modalRemove_module_css_1.default.dna} src="/dna.svg" alt=""/>
                Raça
              </label>
              <input type="text" placeholder="Raça" name="raca" value={formData.raca} onChange={handleChange} readOnly/>
            </div>
            <div>
              <label>
                <img className={modalRemove_module_css_1.default.calendar} src="/calendar.svg" alt=""/>
                Nascimento <span>(Aproximado)</span>
              </label>
              <input type="text" placeholder="22/08/2020" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} readOnly/>
            </div>
          </div>

          <div className={modalRemove_module_css_1.default.message}>
            <span>Tem certeza que deseja remover esse pet?</span>
          </div>

          <div className={modalRemove_module_css_1.default.register_buttons}>
            <button onClick={onClose} className={modalRemove_module_css_1.default.back_button}>
              <io5_1.IoArrowBackCircleOutline size={28}/>
              Voltar
            </button>
            <button type="submit" className={modalRemove_module_css_1.default.button_register_modal}>
              <img src="/trash.svg" alt=""/>
              Remover
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = ModalRemove;
//# sourceMappingURL=modalRemove.js.map