import {Request, Response} from 'express';
import {readAllUsers, readUserById, createUser, updateUser, removeUser, createAddress} from '../services/users';
import {loginUser} from '../services/loginUser';
import {AddressAttributes} from "../models/Address";

/**
 * Obtém todos os usuários.
 */
function getUsers(req: Request, res: Response) {
    readAllUsers()
        .then((dataUser) => {
            return res.json({
                success: true,
                dataUser,
            });
        })
        .catch(() => {
            return res.status(500).json({
                success: false,
                message: 'Erro ao obter usuários.',
            });
        });
}

/**
 * Obtém um usuário pelo ID.
 */
function getUser(req: Request, res: Response) {
    const userId = req.params.id;

    if (userId && Number(userId)) {
        readUserById(userId)
            .then((dataUser) => {
                if (dataUser) {
                    return res.json({
                        success: true,
                        dataUser,
                    });
                } else {
                    return res.status(404).json({
                        success: false,
                        message: 'Usuário não encontrado.',
                    });
                }
            })
            .catch(() => {
                return res.status(500).json({
                    success: false,
                    message: 'Erro ao obter usuário.',
                });
            });
    } else {
        res.status(422).json({
            success: false,
            message: 'ID Inválido',
        });
    }
}

/**
 * Cria um novo usuário.
 */
async function postUser(req: Request, res: Response) {
    const { name, email, phone, password, birthday, address } = req.body;

    if (name && email && phone && password && birthday && address) {
        try {
            const user = await createUser(req.body);

            return res.status(201).json({
                success: true,
                message: 'Usuário cadastrado com sucesso!',
                userId: user.id, // Você pode retornar o ID do usuário criado, se necessário.
            });
        } catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({
                    success: false,
                    message: `Erro ao criar usuário: ${error.message}`,
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: "Erro ao criar usuário: erro desconhecido",
                });
            }
        }
    } else {
        return res.status(400).json({
            success: false,
            message: 'Erro: Verifique seus campos!',
        });
    }
}

/**
 * Atualiza um usuário pelo ID.
 */
function patchUser(req: Request, res: Response) {
    const userId = req.params.id;
    if (userId && Number(userId)) {
        updateUser(userId, req.body)
            .then(() => {
                return res.json({
                    success: true,
                    message: 'Usuário editado com sucesso!',
                });
            })
            .catch((error) => {
                return res.status(400).json({
                    success: false,
                    message: `Erro ao editar usuário: ${error.message}`,
                });
            });
    } else {
        res.status(422).json({
            success: false,
            message: 'ID Inválido',
        });
    }
}

/**
 * Remove um usuário pelo ID.
 */
function deleteUser(req: Request, res: Response) {
    const userId = req.params.id;
    if (userId && Number(userId)) {
        removeUser(userId)
            .then(() => {
                return res.json({
                    success: true,
                    message: 'Usuário excluído com sucesso!',
                });
            })
            .catch((error) => {
                return res.status(400).json({
                    success: false,
                    message: `Erro ao excluir usuário: ${error.message}`,
                });
            });
    } else {
        res.status(422).json({
            success: false,
            message: 'ID Inválido',
        });
    }
}

/**
 * Realiza o login de um usuário.
 */
function login(req: Request, res: Response) {
    const {name, password} = req.body;

    loginUser(name, password)
        .then((token) => {
            return res.json({
                success: true,
                token,
            });
        })
        .catch((error) => {
            if (error.message === 'Usuário não encontrado' || error.message === 'Credenciais inválidas') {
                return res.status(401).json({
                    success: false,
                    message: 'Usuário ou senha incorretos',
                });
            } else {
                return res.status(500).json({
                    success: false,
                    message: 'Falha na autenticação',
                });
            }
        });
}

export {
    getUsers,
    getUser,
    postUser,
    patchUser,
    deleteUser,
    login
};