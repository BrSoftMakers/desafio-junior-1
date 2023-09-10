import React, { useState, useEffect } from "react";
import { consultarEnderecoPorCep } from "../../../services/correiosService"; // Importe a função para consultar o endereço por CEP
import { postUsers } from "../../../services/user";
import { AppContainer, Header, FormContainer } from "../../../components/CadastroForm";
import { IMaskInput } from "react-imask";
import { useNavigate } from "react-router-dom";
import ShowPasswordImg from "../../../img/ShowPasswordImg 1.png";
import HidePasswordImg from "../../../img/HidePasswordImg 1.png";

function Cadastro() {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: '',
        cpf: '',
        birthday: '',
        phone: '',
        email: '',
        password: '',
        isAdmin: '',
        address: {
            cep: '',
            street: '',
            city: '',
            state: ''
        }
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        cpf: '',
        birthday: '',
        phone: '',
        email: '',
        password: '',
        isAdmin: '',
        address: {
            cep: '',
            street: '',
            city: '',
            state: ''
        }
    });

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const updateAddressFields = async (cep) => {
        try {
            const addressInfo = await consultarEnderecoPorCep(cep);

            if (addressInfo.erro) {
                console.error("CEP não encontrado.");
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    address: {
                        ...prevData.address,
                        street: addressInfo.logradouro || "",
                        city: addressInfo.localidade || "",
                        state: addressInfo.uf || ""
                    }
                }));
            }
        } catch (error) {
            console.error("Erro ao consultar o CEP:", error);
        }
    };

    const handleCepChange = (e) => {
        const cep = e.target.value;
        setFormData((prevData) => ({ ...prevData, address: { ...prevData.address, cep } }));
        updateAddressFields(cep);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realize suas validações manualmente aqui
        // Por exemplo, você pode verificar cada campo e definir erros no estado formErrors
        const errors = {};

        if (!formData.name) {
            errors.name = "Obrigatório";
        }

        // Faça isso para todos os campos

        setFormErrors(errors);

        // Verifique se há erros
        if (Object.keys(errors).length === 0) {
            // Se não houver erros, prossiga com a submissão
            try {
                await postUsers(formData); // Suponha que esta função faça a chamada à API de postagem de usuário
                setMessage("Usuário cadastrado com sucesso!");
                navigate('/Editar');
            } catch (error) {
                setMessage("Erro ao cadastrar o usuário. Por favor, tente novamente.");
            }
        }
    };

    return (
        <div className="relative ml-[195px] -mt-[650px] ">
            <AppContainer className="">
                <FormContainer className="mt-16 flex ml-12">
                    <div className="flex text-#0588D1 ">
                        <form onSubmit={handleSubmit} className="">
                            <div className="grid grid-cols-3 gap-5 mb-6">
                                <div className="">
                                    <label htmlFor="name" className="block text-sm font-medium">
                                        Nome
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Digite o seu nome completo"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-[20rem] focus:border-#0588D1 focus:border-[2.8px] focus:outline-none px-3 py-2 border border-gray-300 rounded-xl "
                                    />
                                    {formErrors.name && <div className="text-sm">{formErrors.name}</div>}
                                </div>
                                <div className="ml-5">
                                    <label htmlFor="birthday" className="block text-sm font-medium">
                                        Data de Nascimento
                                    </label>
                                    <input
                                        id="birthday"
                                        name="birthday"
                                        type="date"
                                        placeholder="Digite a sua data de nascimento"
                                        value={formData.birthday}
                                        onChange={(e) => setFormData({ ...formData, birthday: e.target.value })}
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl text-gray-400  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.birthday && <div className="text-sm">{formErrors.birthday}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="phone" className="block text-sm font-medium">
                                        Celular
                                    </label>
                                    <IMaskInput
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        mask="(00) 0 0000-0000"
                                        placeholder="Digite o seu telefone"
                                        value={formData.phone}
                                        onAccept={(value) => setFormData({ ...formData, phone: value })}
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.phone && <div className="text-sm">{formErrors.phone}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="block text-sm font-medium">
                                        E-mail
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Digite o seu email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-[20rem] px-3 py-2 border border-gray-300 rounded-xl  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.email && <div className="text-sm">{formErrors.email}</div>}
                                </div>
                                <div className="ml-5">
                                    <label htmlFor="password" className="block text-sm font-medium">
                                        Senha
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            name="password"
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="********"
                                            value={formData.password}
                                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                            className="w-42 px-3 py-2 pr-12 border border-gray-300 rounded-xl  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                        />
                                        <img
                                            src={showPassword ? HidePasswordImg : ShowPasswordImg}
                                            alt={showPassword ? "Ocultar senha" : "Mostrar senha"}
                                            className="absolute right-2 top-1/3 transform mr-20 mt-2 -translate-y-1/2 cursor-pointer h-6"
                                            onClick={togglePasswordVisibility}
                                        />
                                    </div>
                                    {formErrors.password && <div className="w-[310px] text-sm pl-2">{formErrors.password}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="address.cep" className="block text-sm font-medium">
                                        CEP
                                    </label>
                                    <input
                                        id="address.cep"
                                        name="address.cep"
                                        type="text"
                                        placeholder="Digite o CEP"
                                        value={formData.address.cep}
                                        onChange={handleCepChange} // Adicione um manipulador de eventos onBlur para o campo CEP
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.address?.cep && <div className="text-sm">{formErrors.address?.cep}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="address.street" className="block text-sm font-medium">
                                        Rua
                                    </label>
                                    <input
                                        id="address.street"
                                        name="address.street"
                                        type="text"
                                        placeholder="Digite a Rua"
                                        value={formData.address.street}
                                        onChange={(e) => setFormData({ ...formData, address: { ...formData.address, street: e.target.value } })}
                                        className="w-[20rem] px-3 py-2 border border-gray-300 rounded-xl focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.address?.street && <div className="text-sm">{formErrors.address?.street}</div>}
                                </div>
                                <div className="ml-5">
                                    <label htmlFor="address.city" className="block text-sm font-medium">
                                        Cidade
                                    </label>
                                    <input
                                        id="address.city"
                                        name="address.city"
                                        type="text"
                                        placeholder="Digite a Cidade"
                                        value={formData.address.city}
                                        onChange={(e) => setFormData({ ...formData, address: { ...formData.address, city: e.target.value } })}
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.address?.city && <div className="text-sm">{formErrors.address?.city}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="address.state" className="block text-sm font-medium">
                                        Estado
                                    </label>
                                    <input
                                        id="address.state"
                                        name="address.state"
                                        type="text"
                                        placeholder="Digite o Estado"
                                        value={formData.address.state}
                                        onChange={(e) => setFormData({ ...formData, address: { ...formData.address, state: e.target.value } })}
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    />
                                    {formErrors.address?.state && <div className="text-sm">{formErrors.address?.state}</div>}
                                </div>
                                <div className="">
                                    <label htmlFor="isAdmin" className="block text-sm font-medium">
                                        Função
                                    </label>
                                    <select
                                        defaultValue="DEFAULT"
                                        id="isAdmin"
                                        name="isAdmin"
                                        value={formData.isAdmin}
                                        onChange={(e) => setFormData({ ...formData, isAdmin: e.target.value })}
                                        className="w-64 px-1 py-2 border border-gray-300 rounded-xl text-gray-400  bg-white  focus:border-#0588D1 focus:border-[2.8px] focus:outline-none"
                                    >
                                        <option value="DEFAULT" hidden>Selecionar</option>
                                        <option value="0">Cliente</option>
                                        <option value="1">Gestor</option>
                                    </select>
                                    {formErrors.isAdmin && <div className="text-sm">{formErrors.isAdmin}</div>}
                                </div>
                            </div>
                            <div className="flex justify-end mr-[7rem]">
                                <button
                                    type="submit"
                                    className="w-36 px-3 py-2 bg-#0588D1 mt-8 p-2 text-white rounded-xl hover:bg-#border-#0588D1"
                                >
                                    Cadastrar
                                </button>
                            </div>
                            {/* Exibe a mensagem de sucesso ou erro */}
                            {message && <p>
                                <svg className="w-6 h-6 text-red-500 dark:red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 21">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 3.464V1.1m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175C17 15.4 17 16 16.462 16H3.538C3 16 3 15.4 3 14.807c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 10 3.464ZM4 3 3 2M2 7H1m15-4 1-1m1 5h1M6.54 16a3.48 3.48 0 0 0 6.92 0H6.54Z" />
                                </svg>
                                {message}</p>}
                        </form>
                    </div>
                </FormContainer>
            </AppContainer>
        </div>
    );
}

export default Cadastro;