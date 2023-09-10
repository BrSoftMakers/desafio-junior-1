import React, { useState } from "react";
import styled from "styled-components";
import userImage from "../../img/user_3177440.png";
import {format, parseISO} from "date-fns";
import SmallModal from "../../components/SmallModal";
import Seach from "../../components/Seach/index";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {IMaskInput} from "react-imask";

export const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 10px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;


export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-right: 15px;
`;

export const FormButton = styled.button`
  margin-left: 10px;
  padding: 8px 12px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const UsersTable = ({users, onEditUser, onDeleteUser}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const [isModalOpen3, setIsModalOpen3] = useState(false);

    const [user, setUser] = useState({});

    function handleModal(user) {
        setUser(user);
        setIsModalOpen(!isModalOpen);
    }

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal2 = () => {
        setIsModalOpen2(true);
    };

    const closeModal2 = () => {
        setIsModalOpen2(false);
    };

    const openModal3 = () => {
        setIsModalOpen3(true);
    };

    const closeModal3 = () => {
        setIsModalOpen3(false);
        closeModal2();
        closeModal();
    };

    const handleDelete = (user) => {
        onDeleteUser(user);
        openModal3();
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const handleButton1Click = () => {
        // Lógica a ser executada quando o botão 1 for clicado.
        console.log("Botão 1 foi clicado");
    };

    const handleButton2Click = () => {
        // Lógica a ser executada quando o botão 2 for clicado.
        console.log("Botão 2 foi clicado");
    };
    return (
        <div className="relative ml-[195px] -mt-[650px]">
            <section className="flex justify-between mx-8 mt-4 items-center">
                {/* Buscar */}
                <Seach/>
                <div className="flex items-center">
                    <a
                        href="/cadastro"
                        className="w-50 px-3 py-2 bg-#0588D1 p-2 text-white rounded-xl hover:bg-blue-600 flex"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4.5v15m7.5-7.5h-15"
                            />
                        </svg>
                        Cadastrar
                    </a>
                </div>
            </section>

            <table className="mx-8 mt-4 bg-gray-200 rounded-xl mb-10">
                <thead className="text-#0588D1">
                <tr className="">
                    <th className="py-2 auton">Nome do usuário:</th>
                    <th className="py-2 auton">Telefone</th>
                    <th className="py-2 auton">Email</th>
                    <th className="py-2 auton">Nascimento</th>
                    <th className="py-2 auton">Cidade</th>
                    <th className="py-2 auton">Estado</th>
                    <th className="py-2 auton">Ação</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <>
                        <tr
                            key={user.id}
                            className="space-x-8 border-t-2 border-white text-gray-700"
                        >
                            <td className="flex items-center my-2 ml-4 align-middle">
                  <span
                      className="flex justify-center w-8 h-8 bg-white rounded-full border border-gray-300 overflow-hidden">
                    <img className="w-7" src={userImage} alt="Imagem do Usuário"/>
                  </span>
                                <span className="ml-2 mr-4">{user.name}</span>
                            </td>
                            <td className="px-8 align-middle">{user.phone}</td>
                            <td className="px-8 align-middle">{user.email}</td>
                            <td className="px-8 align-middle">
                  <span className="flex bg-gray-400 text-white h-6 w-24 rounded-md justify-center">
                    {format(parseISO(user.birthday), "dd/MM/yyyy")}
                  </span>
                            </td>
                            <td className="px-8 align-middle">
                                {user.addresses && user.addresses.length > 0 ? user.addresses[0].city : ''}
                            </td>
                            <td className="px-8 align-middle">
                                {user.addresses && user.addresses.length > 0 ? user.addresses[0].state : ''}
                            </td>
                            <td className="px-8 align-middle">
                                <button
                                    onClick={() => handleModal(user)}
                                    className="hover:bg-gray-400 rounded"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                                        />
                                    </svg>
                                </button>
                            </td>
                        </tr>
                    </>
                ))}
                </tbody>

                <div>
                    <SmallModal
                        isModalOpen={isModalOpen}
                        closeModal={closeModal}
                        title="Ações"
                        button1="Editar usuário"
                        button2="Deletar usuário"
                        handleButtonClick1={() => onEditUser(user)}
                        handleButtonClick2={openModal2}
                        mode={2}
                    />
                </div>
                <div>
                    <SmallModal
                        isModalOpen={isModalOpen2}
                        closeModal={closeModal2}
                        title="Deletar usuário"
                        description="Você tem certeza que deseja prosseguir com essa ação e deletar esse usuário ?"
                        button1="Cancelar"
                        button2="Deletar usuário"
                        handleButtonClick1={closeModal2}
                        handleButtonClick2={() => handleDelete(user)}
                        mode={2}
                    />
                </div>
                <div>
                    <SmallModal
                        isModalOpen={isModalOpen3}
                        closeModal={closeModal3}
                        title="Usuário deletado com sucesso!"
                        button1="Ok"
                        handleButtonClick1={closeModal2}
                        mode={1}
                    />
                </div>
            </table>
        </div>

    );
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Obrigatório"),

    email: Yup.string()
        .email("Email inválido")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            "Deve ser um endereço de email válido"
        )
        .required("Obrigatório"),

    phone: Yup.string()
        .matches(/^\(\d{2}\) 9 \d{4}-\d{4}$/, "Digite um número de celular válido")
        .required("Obrigatório"),

    birthday: Yup.date().required("Obrigatório"),

});

export const UserModal = ({isOpen, formData, onChange, onCancel, onSave}) => {

    const [message, setMessage] = useState("");

    const initialValues = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        birthday: formData.birthday,
    };

    const handleSaveEdit = async (values) => {
        try {
            // Lógica de envio do formulário
            await onSave(values);
            // Lógica de sucesso (pode redirecionar ou fazer outras ações)
        } catch (error) {
            if (error && error.response && error.response.status === 403 || error.response.status === 401) {
                // Usuário não tem permissão para editar
                setMessage("Você não tem permissão para editar os usuário.");
            } else {
                // Outro erro de requisição
                // Você pode adicionar um alerta ou mensagem personalizada aqui
                console.error(error);
            }
        }
    };

    return (
        <>
            {isOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleSaveEdit}
                        >
                            <Form>
                                <div className="flex items-center mb-3">
                                    <label htmlFor="name" className="text-black">
                                        Nome:
                                    </label>
                                    <Field
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl  focus:border-pink-700 focus:border-[2.8px] focus:outline-none ml-5"
                                    />
                                    <ErrorMessage name="name" component="div"/>
                                </div>
                                <div className="flex items-center mb-3">
                                    <label htmlFor="email" className="text-black">
                                        Email:
                                    </label>
                                    <Field
                                        type="text"
                                        id="email"
                                        name="email"
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl  focus:border-pink-700 focus:border-[2.8px] focus:outline-none ml-[22px]"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-end"
                                    />
                                </div>
                                <div className="flex items-center mb-3">
                                    <label htmlFor="phone" className="text-black">
                                        telefone:
                                    </label>
                                    <Field
                                        as={IMaskInput}
                                        mask="(00) 0 0000-0000"
                                        type="phone"
                                        id="phone"
                                        name="phone"
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl  focus:border-pink-700 focus:border-[2.8px] focus:outline-none ml-[45px]"
                                    />
                                    <ErrorMessage name="phone" component="div"/>
                                </div>
                                <div className="flex items-center mb-3">
                                    <label htmlFor="birthday" className="text-black">
                                        Data:
                                    </label>
                                    <Field
                                        type="date"
                                        id="birthday"
                                        name="birthday"
                                        className="w-42 px-3 py-2 border border-gray-300 rounded-xl  focus:border-pink-700 focus:border-[2.8px] focus:outline-none ml-[27px]"
                                    />
                                    <ErrorMessage name="birthday" component="div"/>
                                </div>

                                <FormButtonContainer>
                                    <FormButton type="button" onClick={onCancel}>
                                        Cancelar
                                    </FormButton>
                                    <FormButton type="submit">Salvar</FormButton>
                                </FormButtonContainer>
                            </Form>
                        </Formik>
                    </ModalContent>
                </ModalOverlay>
            )}
        </>
    );
};
