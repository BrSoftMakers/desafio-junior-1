"use client"

import { useState, useEffect } from "react";
import { PetFormProps } from "../interfaces";
import { FileText } from "lucide-react";
import { useAuth } from "../context/AuthContext";


export default function PetForm({ onClose, onSave, title, initialData, readOnly }: PetFormProps) {
  const { aux, setAux } = useAuth();
  
  const [formData, setFormData] = useState({
    id: initialData?.id || undefined,
    name: initialData?.name || "",
    customerName: initialData?.customerName || "",
    contact: initialData?.contact || "",
    type: initialData?.type || "",
    breed: initialData?.breed || "",
    age: initialData?.age || "",
    address: initialData?.address || "",
  });

  useEffect(() => {
    setFormData({
      id: initialData?.id || undefined,
      name: initialData?.name || "",
      customerName: initialData?.customerName || "",
      contact: initialData?.contact || "",
      type: initialData?.type || "",
      breed: initialData?.breed || "",
      age: initialData?.age || "",
      address: initialData?.address || "",
    });
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validação dos campos obrigatórios
    const isValid = validateForm();
    if (!isValid) return;
  
    try {
      await onSave(formData);
      setAux((prev) => !prev);
      alert("Pet cadastrado!")
    } catch (error) {
      console.error("Erro ao salvar:", error);
    }
  };
  
  const validateForm = () => {
    const { name, customerName, contact, type, breed, age, address } = formData;
    if (!name || !customerName || !contact || !type || !breed || !age || !address) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return false;
    }
    return true;
  };

  return (
    <section className="bg-[#ffffff] text-black absolute top-[100px] left-1/2 transform -translate-x-1/2 p-6 rounded-lg shadow-lg w-full max-w-2xl z-50 border-2 border-[#000000] shadow-[5px_5px_20px_5px_#000000]">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <div className="flex items-center gap-2">
          <FileText size={24} className="text-[#404a5c]" />
          <h1 id="title" className="text-lg font-semibold text-black">{title}</h1>
        </div>
        <button id="close" onClick={onClose} className="text-red-600 text-lg cursor-pointer">✖</button>
      </div>

      {/* Formulário */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 mb-4 text-black">
        <label className="flex flex-col text-black">
          <p className="text-black">Nome</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-[#f1f5f9] p-3 rounded-lg text-black"
            placeholder="Nome do pet"
            readOnly={readOnly}
            disabled={readOnly}
          />
        </label>
        <label className="flex flex-col text-black">
          <p className="text-black">Dono</p>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="bg-[#f1f5f9] p-3 rounded-lg text-black"
            placeholder="Nome do dono"
            readOnly={readOnly}
            disabled={readOnly}
          />
        </label>
        <label className="flex flex-col text-black">
          <p className="text-black">Telefone</p>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="bg-[#f1f5f9] p-3 rounded-lg text-black"
            placeholder="(00) 0 0000-0000"
            readOnly={readOnly}
            disabled={readOnly}
          />
        </label>
        <div className="flex flex-col text-black">
          <p className="text-black">Animal</p>
          <div className="flex gap-4">
            <label className="flex items-center text-black cursor-pointer">
              <input
                type="radio"
                name="type"
                value="cachorro"
                checked={formData.type === "cachorro"}
                onChange={handleChange}
                className="mr-2"
                readOnly={readOnly}
                disabled={readOnly}
              /> Cachorro
            </label>
            <label className="flex items-center text-black ">
              <input
                type="radio"
                name="type"
                value="gato"
                checked={formData.type === "gato"}
                onChange={handleChange}
                className="mr-2"
                readOnly={readOnly}
                disabled={readOnly}
              /> Gato
            </label>
          </div>
        </div>
        <label className="flex flex-col text-black">
          <p className="text-black">Raça</p>
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleChange}
            className="bg-[#f1f5f9] p-3 rounded-lg text-black"
            placeholder="Raça"
            readOnly={readOnly}
            disabled={readOnly}
          />
        </label>
        <label className="flex flex-col text-black">
          <p className="text-black">Nascimento (Aproximado)</p>
          <input
            type="date"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="bg-[#f1f5f9] p-3 rounded-lg text-black"
            readOnly={readOnly}
            disabled={readOnly}
          />
        </label>
        <label className="flex flex-col col-span-2 text-black">
          <p className="text-black">Endereço</p>
          <input
            type="text"
            name="address"
            value={formData.address}
            placeholder="Rua 2 bairro 3..."
            onChange={handleChange}
            className="bg-[#f1f5f9] p-3 rounded-lg text-black"
            readOnly={readOnly}
            disabled={readOnly}
          />
        </label>
      </form>

      {/* Rodapé */}
      <div className="flex justify-center gap-4 text-black">
      {!readOnly && (
          <button
            id="save"
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
          >
            Salvar
          </button>
        )}
        <button
          id="close"
          onClick={onClose}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
        >
          Cancelar
        </button>
      </div>
    </section>
  );
}
