import React, { useState, useEffect } from "react";
import { AppContainer, Header, FormContainer } from "../../../components/CadastroForm";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import { postPet } from "../../../services/pets";
import { getUsers } from "../../../services/user";

function CadastroAnimal() {
    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const userList = await getUsers();
                setUsers(userList);
            } catch (error) {
                console.error("Erro ao obter a lista de usuários:", error);
            }
        }

        fetchUsers();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        age: '',
        type: '', // Campo de seleção para "Cão" ou "Gato"
        breed: '',
        ownerId: '',
    });

    const [formErrors, setFormErrors] = useState({
        name: '',
        age: '',
        type: '',
        breed: '',
        ownerId: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Limpe o erro relacionado a este campo quando o usuário começa a digitar novamente
        setFormErrors({ ...formErrors, [name]: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realize suas validações manualmente aqui
        const errors = {};

        if (!formData.name) {
            errors.name = "Obrigatório";
        }

        if (!formData.age) {
            errors.age = "Obrigatório";
        }

        if (!formData.type) {
            errors.type = "Obrigatório";
        }

        if (!formData.breed) {
            errors.breed = "Obrigatório";
        }

        if (!selectedUserId) {
            errors.ownerId = "Obrigatório";
        }

        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const animalData = {
                    name: formData.name,
                    age: formData.age,
                    type: formData.type,
                    breed: formData.breed,
                    ownerId: selectedUserId,
                };

                const response = await postPet(animalData);

                if (response.success) {
                    setMessage(response.message);
                    navigate('/AnimalPage');
                } else {
                    setMessage(response.message);
                    console.log("Erro ao cadastrar animal:", response.message);
                }
            } catch (error) {
                console.error("Erro ao cadastrar animal:", error);
                setMessage("Erro ao cadastrar animal. Por favor, tente novamente.");
            }
        }
    };

    return (
        <div className="relative ml-[195px] -mt-[650px]">
            <AppContainer className="">
                <FormContainer className="mt-16 flex ml-12">
                    <div className="flex text-#0588D1">
                        <form onSubmit={handleSubmit} className="">
                            <div className="grid grid-flow-col mb-6 gap-5">
                                <div className="">
                                    <label htmlFor="name" className="block text-sm font-medium">
                                        Nome do animal
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Digite o nome do animal"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-[30rem] focus:border-#0588D1 focus:border-[2.8px] focus:outline-none px-3 py-2 border border-gray-300 rounded-xl"
                                    />
                                    {formErrors.name && <div className="text-sm text-red-500">{formErrors.name}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="age" className="block text-sm font-medium">
                                        Idade
                                    </label>
                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        placeholder="Digite a idade do animal"
                                        value={formData.age}
                                        onChange={handleInputChange}
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.age && <div className="text-sm text-red-500">{formErrors.age}</div>}
                                </div>
                                <div className="gap-10">
                                    <label htmlFor="type" className="block text-sm font-medium">
                                        Tipo
                                    </label>
                                    <select
                                        defaultValue="DEFAULT"
                                        id="type"
                                        name="type"
                                        value={formData.type}
                                        onChange={handleInputChange}
                                        className="w-48 px-3 py-2 border border-gray-300 rounded-xl  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    >
                                        <option value="DEFAULT" hidden>Selecionar</option>
                                        <option value="dog">Cachoro</option>
                                        <option value="cat">Gato</option>
                                    </select>

                                    {formErrors.type && <div className="text-sm text-red-500">{formErrors.type}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="ownerId" className="block text-sm font-medium">
                                        ID do dono
                                    </label>
                                    <select
                                        defaultValue="DEFAULT"
                                        id="ownerId"
                                        name="ownerId"
                                        value={selectedUserId}
                                        onChange={(e) => setSelectedUserId(e.target.value)}
                                        className="w-48 px-3 py-2 border border-gray-300 rounded-xl  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    >
                                        <option value="DEFAULT" hidden>Selecionar</option>
                                        {users.map((user) => (
                                            <option key={user.id} value={user.id}>
                                                {user.name}
                                            </option>
                                        ))}
                                    </select>

                                    {formErrors.ownerId && <div className="text-sm text-red-500">{formErrors.ownerId}</div>}
                                </div>
                            </div>
                            <div className="grid grid-flow-col mb-6 gap-2">
                                <div className="">
                                    <label htmlFor="breed" className="block text-sm font-medium">
                                        Raça
                                    </label>
                                    <input
                                        id="breed"
                                        name="breed"
                                        type="text"
                                        placeholder="Digite a raça do animal"
                                        value={formData.breed}
                                        onChange={handleInputChange}
                                        className="w-[30rem] px-3 py-2 border border-gray-300 rounded-xl  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.breed && <div className="text-sm text-red-500">{formErrors.breed}</div>}
                                </div>
                            </div>
                            <div className="grid grid-flow-col mb-6 gap-5l place-items-end">
                                <button
                                    type="submit"
                                    className="w-36 px-3 py-2 bg-#0588D1 mt-8 p-2 text-white rounded-xl hover:bg-#border-#0588D1"
                                >
                                    Cadastrar
                                </button>
                            </div>
                            {message && (
                                <p>
                                    <svg className="w-6 h-6 text-red-500 dark:red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z" />
                                    </svg>
                                    {message}
                                </p>
                            )}
                        </form>
                    </div>
                </FormContainer>
            </AppContainer>
        </div>
    );
}

export default CadastroAnimal;