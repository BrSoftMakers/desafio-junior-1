import React, { useEffect, useState } from 'react';
import { Suspense, lazy } from 'react';
import { getUsers, patchUsers, deleteUser } from '../../../services/user';
import Cookies from 'js-cookie';
import {format, parseISO} from "date-fns";

//Importação lazy para UsersTable e UserModal
const UsersTable = lazy(() => import('../../../components/EditarUser').then(module => ({ default: module.UsersTable })));
const UserModal = lazy(() => import('../../../components/EditarUser').then(module => ({ default: module.UserModal })));


function Editar() {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        birthday: '',
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isUnauthorized, setIsUnauthorized] = useState(false);

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = Cookies.get('token');
            if (!token) {
                setIsUnauthorized(true);
                return;
            }

            try {
                const dataUser = await getUsers();
                setUsers(Array.isArray(dataUser) ? dataUser : []);
            } catch (error) {
                console.error('Ops! Ocorreu um erro:', error);
            }
        };

        checkAuthentication();
    }, []);

    const handleEditUser = (user) => {
        setEditingUser(user);
        setFormData({
            name: user.name,
            email: user.email,
            phone: user.phone,
            birthday: user.birthday,
        });
        setIsModalOpen(true);
    };

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleCancelEdit = () => {
        setEditingUser(null);
        setFormData({
            name: '',
            email: '',
            phone: '',
            birthday: '',
        });
        setIsModalOpen(false);
    };

    const handleSaveEdit = async (values) => {
        try {
            const token = Cookies.get('token');
            if (!token) {
                setIsUnauthorized(true);
                return;
            }

            await patchUsers(editingUser.id, values);

            const updatedUsers = await getUsers();
            setUsers(Array.isArray(updatedUsers) ? updatedUsers : []);
            setEditingUser(null);
            setFormData({}); // Reinicie o formData para limpar o formulário
            setIsModalOpen(false);
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
        }
    };

    const handleDeleteUser = async (user) => {
        try {
            await deleteUser(user.id);
            const updatedUsers = await getUsers();
            setUsers(Array.isArray(updatedUsers) ? updatedUsers : []);
        } catch (error) {
            console.error('Erro ao excluir o usuário:', error);
        }
    };

    return (
        <div>
            {isUnauthorized ? (
                <div className="flex items-center bg-red-100 p-4 rounded-md mb-4">
                    <p className="text-red-500">Usuário não autorizado</p>
                </div>
            ) : (

                <Suspense fallback={<p>Carregando...</p>}>
                    <div className='h-full'>

                            <UsersTable users={users} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />

                            <UserModal
                                isOpen={isModalOpen}
                                formData={formData}
                                onChange={handleFormChange}
                                onCancel={handleCancelEdit}
                                onSave={handleSaveEdit}
                            />
                    </div>
                </Suspense>
            )}


        </div>
    );
}

export default Editar;