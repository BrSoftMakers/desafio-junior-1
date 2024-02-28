import React, { useState } from "react";
import DatePicker from "react-datepicker";
import InputMask from 'react-input-mask';
import "react-datepicker/dist/react-datepicker.css";
import "../app/globals.css";


const CadastroModal = ({ isOpen, onClose }) => {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNascimento] = useState(new Date());
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");
  const [nomeDono, setNomeDono] = useState("");
  const [contatoDono, setContatoDono] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleCadastro = async () => {
    if (!nome || !dataNascimento  || !tipo || !raca || !nomeDono || !contatoDono) {
      setError("Todos os campos devem ser preenchidos");
      return alert(error);
    }

    const data = {
      name: nome,
      dateOfBirth: dataNascimento.toISOString(),
      type: tipo,
      breed: raca,
      ownerName: nomeDono,
      ownerContact: contatoDono,
    };

    try {
      const response = await fetch("http://localhost:3000/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Cadastro realizado com sucesso!");
        onClose();
        window.location.reload();
      } else {
        console.error("Erro ao cadastrar o pet");
      }
    } catch (error) {
      console.error("Erro ao realizar a requisição:", error);
    }
  };

  const handleCancelar = () => {
    setNome("");
    setDataNascimento(new Date());
    setTipo("");
    setRaca("");
    setNomeDono("");
    setContatoDono("");
    setError(null);
    onClose();
  };

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div style={{ border: "solid, 1px", position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: "flex", justifyContent: "center", alignItems: "center", color: "white" }}>
        <div style={{ background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)", padding: 20, borderRadius: 8, maxWidth: 600,  border: "3px solid", borderColor: "rgba(0, 202, 252, 1)" }}>
          <h1 style={{ color: "white", marginBottom: "2em" }}>Cadastro de Pets</h1>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr ", gap: 1, background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)" }}>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, textAlign: "left" }}>
              <label style={{ color: '#404A5C' }}>Nome:</label>
              <input
                required
                type="text"
                placeholder="Simba"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={{ background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)", marginBottom: 10, border: "3px solid #404A5C", borderRadius: 4, padding: 8 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, textAlign: "left" }}>
              <label style={{ color: '#404A5C' }}>Tipo:</label>
              <div style={{ background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)", marginBottom: 10, border: "3px solid #404A5C", borderRadius: 4, padding: 8 }}>
                <input
                  type="checkbox"
                  id="cat"
                  name="tipo"
                  value="Cat"
                  checked={tipo === "Cat"}
                  onChange={(e) => setTipo(e.target.value)}
                  style={{ marginRight: 10 }}
                />
                <label htmlFor="cat" style={{ color: '#404A5C' }}>Gato</label>
                <input
                  type="checkbox"
                  id="dog"
                  name="tipo"
                  value="Dog"
                  checked={tipo === "Dog"}
                  onChange={(e) => setTipo(e.target.value)}
                  style={{ marginLeft: 10, marginRight: 10 }}
                />
                <label htmlFor="dog" style={{ color: '#404A5C' }}>Cachorro</label>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, textAlign: "left" }}>
              <label style={{ color: '#404A5C' }}>Raça:</label>
              <input
                required
                type="text"
                placeholder="Siamese"
                value={raca}
                onChange={(e) => setRaca(e.target.value)}
                style={{ background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)", marginBottom: 10, border: "3px solid #404A5C", borderRadius: 4, padding: 8 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, textAlign: "left" }}>
              <label style={{ color: '#404A5C' }}>Dono:</label>
              <input
                required
                type="text"
                placeholder="Jailson"
                value={nomeDono}
                onChange={(e) => setNomeDono(e.target.value)}
                style={{ background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)", marginBottom: 10, border: "3px solid #404A5C", borderRadius: 4, padding: 8 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, textAlign: "left" }}>
              <label style={{ color: '#404A5C' }}>Contato do Dono:</label>
              <InputMask
                mask="(99) 99999-9999"
                maskChar={null}
                placeholder="(00)00000-0000"
                value={contatoDono}
                onChange={(e) => setContatoDono(e.target.value)}
                style={{ background: "linear-gradient(316.01deg, #000814 15.31%, #001E4D 86.58%)", marginBottom: 10, border: "3px solid #404A5C", borderRadius: 4, padding: 8 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 10, textAlign: "left" }}>
              <label style={{ color: '#404A5C' }}>Data de Nascimento:</label>
              <div className="customInput">
                <DatePicker
                  required
                  selected={dataNascimento}
                  onChange={(date) => setDataNascimento(date)}
                  dateFormat="dd/MM/yyyy"
                  locale="pt"
                  popperPlacement="right"
                  className="customDatePicker"
                />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <button onClick={handleCadastro} style={{ marginRight: 10, padding: "5px 10px", backgroundColor: "#007bff", border: "none", borderRadius: "4em", cursor: "pointer" }}>Cadastrar</button>
            <button onClick={handleCancelar} style={{ padding: "5px 10px", backgroundColor: "#dc3545", border: "none", borderRadius: "4em", cursor: "pointer" }}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CadastroModal;
