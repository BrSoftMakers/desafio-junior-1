import { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { FaQuestionCircle } from "react-icons/fa";

import { usePet } from "../../contexts/PetContext";

import PetFormInput from "./PetFormInput";
import PetFormSelect from "./PetFormSelect";
import Tooltip from "../Tooltip";

import api from "../../services/api";

import styles from "./styles.module.css";

const initialData = {
  id: "",
  petName: "",
  petBreed: "",
  petAge: "",
  petType: "null",
  ownerName: "",
  ownerContact: ""
};

function PetForm({ data = initialData, method = "create" }) {
  const { refresh } = usePet();
  const [values, setValues] = useState(data);
  const history = useHistory();

  function handleChange(prop, value) {
    setValues({ ...values, [prop]: value });
  }

  function handleFocusOnAgeInput() {
    const input = document.querySelector("input[name=age]");

    input.type = "number";
    input.min = "0";

    if (values.petAge < 0) {
      setValues({ ...values, petAge: 0 });
    }
  }

  function handleBlurOnAgeInput() {
    const input = document.querySelector("input[name=age]");

    input.type = "text";

    if (values.petAge < 0) {
      setValues({ ...values, petAge: "" });
    }
  }

  async function handleSubmit(ev) {
    ev.preventDefault();

    try {
      if (method === "create") {
        const response = await api.post("pets", {
          name: values.petName,
          age: values.petAge,
          type: values.petType,
          breed: values.petBreed,
          owner: {
            name: values.ownerName,
            contact: values.ownerContact
          }
        });

        if (response.data.error) {
          return toast.error(response.data.message);
        }

        handleClear();

        document.querySelector("input[name=name]").focus();

        toast.success(response.data.message);

        refresh();
      } else {
        const response = await api.put(`pet/${data.id}`, {
          name: values.petName,
          age: values.petAge,
          type: values.petType,
          breed: values.petBreed,
          owner: {
            name: values.ownerName,
            contact: values.ownerContact
          }
        });

        if (response.data.error) {
          return toast.error(response.data.message);
        }

        handleClear();

        document.querySelector("input[name=name]").focus();

        toast.success(response.data.message);

        refresh();
      }
    } catch {
      toast.error("Ocorreu um erro na aplicação. Por favor, tente novamente.");
    }
  }

  function handleBack() {
    history.goBack();
  }

  function handleClear() {
    setValues({
      id: "",
      ownerContact: "",
      ownerName: "",
      petAge: "",
      petBreed: "",
      petName: "",
      petType: "null"
    });
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.formWrapper}>
        <div className={styles.form}>
          <h2 className={styles.heading}>Dados do pet</h2>
          <PetFormInput
            name="name"
            label="Nome"
            placeholder="Ex: Bob, Cuca, Belinha..."
            value={values.petName}
            onChange={ev => handleChange("petName", ev.target.value)}
            tabIndex={1}
            className={styles.petNameInput}
          />
          <PetFormInput
            name="breed"
            label="Raça"
            placeholder="Ex: Labrador, Vira-lata..."
            value={values.petBreed}
            onChange={ev => handleChange("petBreed", ev.target.value)}
            tabIndex={2}
            className={styles.petBreedInput}
          />
          <PetFormInput
            name="age"
            label={
              <span
                style={{
                  display: "flex",
                  alignItems: "center"
                }}
              >
                Idade
                <FaQuestionCircle
                  size={20}
                  color="#fff"
                  style={{
                    marginLeft: 12
                  }}
                  data-tip="Idade em anos. Caso não tenha 1 (um) ano de idade completo, preencha como 0 (zero)."
                />
                <Tooltip />
              </span>
            }
            placeholder="Idade em anos"
            value={values.petAge}
            onChange={ev => handleChange("petAge", ev.target.value)}
            onFocus={handleFocusOnAgeInput}
            onBlur={handleBlurOnAgeInput}
            tabIndex={3}
            className={styles.petAgeInput}
          />
          <PetFormSelect
            name="type"
            label="Espécie"
            placeholder="Cachorro ou gato?"
            value={values.petType}
            onChange={ev => handleChange("petType", ev.target.value)}
            tabIndex={4}
            className={`${styles.petTypeInput} ${
              values.petType === "null" ? styles.invalidSelect : ""
            }`}
          >
            <option hidden value="null">
              Cachorro ou gato?
            </option>
            <option value="dog">Cachorro</option>
            <option value="cat">Gato</option>
          </PetFormSelect>
        </div>
        <div className={styles.form}>
          <h2 className={styles.heading}>Dados do dono</h2>
          <PetFormInput
            name="ownerName"
            label="Nome"
            placeholder="Ex: João, Célia, Isabella..."
            value={values.ownerName}
            onChange={ev => handleChange("ownerName", ev.target.value)}
            tabIndex={5}
            className={styles.ownerNameInput}
          />
          <PetFormInput
            name="ownerContact"
            label="Telefone para contato"
            placeholder="Ex: (15) 9 9999-8888"
            value={values.ownerContact}
            onChange={ev => handleChange("ownerContact", ev.target.value)}
            tabIndex={6}
            className={styles.ownerContactInput}
          />
        </div>
      </div>
      <div className={styles.rowButtons}>
        <button
          type="button"
          className={`${styles.baseButton} ${styles.backButton}`}
          onClick={handleBack}
          tabIndex={9}
        >
          Voltar
        </button>
        <div className={styles.buttonGroup}>
          <button
            type="button"
            className={`${styles.baseButton} ${styles.clearButton}`}
            onClick={handleClear}
            tabIndex={8}
          >
            Limpar
          </button>
          <button
            type="submit"
            className={`${styles.baseButton} ${styles.saveButton}`}
            tabIndex={7}
          >
            Salvar
          </button>
        </div>
      </div>
    </form>
  );
}

export default PetForm;
