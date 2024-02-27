"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const modal_module_css_1 = require("./modal.module.css");
const io5_1 = require("react-icons/io5");
const fi_1 = require("react-icons/fi");
const io5_2 = require("react-icons/io5");
const Modal = ({ onClose, onAddPet }) => {
    const [formData, setFormData] = (0, react_1.useState)({
        nome: "",
        dono: "",
        raca: "",
        telefone: "",
        dataNascimento: "",
        animal: "Gato",
    });
    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
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
        try {
            const response = await fetch("http://localhost:3000/pets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Erro ao cadastrar pet");
            }
            const newPet = await response.json();
            console.log("Pet cadastrado com sucesso!");
            onAddPet(newPet);
            onClose();
        }
        catch (error) {
            console.error("Erro ao cadastrar pet:");
        }
    };
    return (<div className={modal_module_css_1.default.register_animal_container}>
      <div className={modal_module_css_1.default.register_animal}>
        <div className={modal_module_css_1.default.header_animal}>
          <div className={modal_module_css_1.default.div_circle}>
            <fi_1.FiPlusCircle />
          </div>
          <h1>Cadastrar</h1>
          <button className={modal_module_css_1.default.button_icon} onClick={onClose}>
            <io5_1.IoClose />
          </button>
        </div>

        <form className={modal_module_css_1.default.form_modal} onSubmit={handleSubmit}>
          <div className={modal_module_css_1.default.form_section}>
            <div>
              <label>
                <img className={modal_module_css_1.default.bone} src="/bone.svg" alt=""/> Nome
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
                <img className={modal_module_css_1.default.phone} src="/telephone.svg" alt=""/>
                Telefone
              </label>
              <input type="text" name="telefone" value={formData.telefone} onChange={handlePhoneChange} placeholder="(00) 0 0000-0000"/>
            </div>
          </div>

          <div className={modal_module_css_1.default.form_section}>
            <div>
              <label>
                <img className={modal_module_css_1.default.dna} src="/dna.svg" alt=""/>
                Animal
              </label>
              <div className={modal_module_css_1.default.radio}>
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
                <img className={modal_module_css_1.default.dna} src="/dna.svg" alt=""/>
                Raça
              </label>
              <input type="text" placeholder="Raça" name="raca" value={formData.raca} onChange={handleChange}/>
            </div>
            <div>
              <label>
                <img className={modal_module_css_1.default.calendar} src="/calendar.svg" alt=""/>
                Nascimento <span>(Aproximado)</span>
              </label>
              <input type="date" placeholder="22/08/2020" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange}/>
            </div>
          </div>
          <div className={modal_module_css_1.default.register_buttons}>
            <button onClick={onClose} className={modal_module_css_1.default.back_button}>
              <io5_2.IoArrowBackCircleOutline size={25}/>
              Voltar
            </button>
            <button type="submit" className={modal_module_css_1.default.button_register_modal}>
              <fi_1.FiPlusCircle size={25}/>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>);
};
exports.default = Modal;
//# sourceMappingURL=modal.js.map