import User, {UserAttributes} from '../models/User';
import Address, {AddressAttributes} from '../models/Address';
import bcrypt from 'bcrypt';

/**
 * Cria um novo usuário no banco de dados.
 * @param {UserAttributes & { address: AddressAttributes }} user - Os detalhes do usuário a serem criados, incluindo o endereço.
 * @returns {Promise<User>} - O usuário criado.
 * @throws {Error} - Se ocorrer um erro durante a criação do usuário.
 */
async function createUser(user: UserAttributes & { address: AddressAttributes, isAdmin?: boolean }): Promise<User> {
    try {
        const {name, email, phone, password, birthday, address, isAdmin} = user;

        // Valide os dados do usuário antes de criar
        if (!name || !email || !phone || !password || !birthday || !address) {
            throw new Error('Todos os campos são obrigatórios.');
        }

        // Crie o hash da senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crie o usuário com a senha hash
        const newUser = await User.create({
            name,
            email,
            phone,
            password: hashedPassword,
            birthday,
            isAdmin, // Adicione isAdmin aqui
        });

        const {cep, street, city, state} = address;

        // Cadastra o endereço associado ao usuário
        const addressData: AddressAttributes = {
            id_user: newUser.id,
            cep,
            street,
            city,
            state
        };
        await createAddress(addressData);

        return newUser;
    } catch (error) {
        // @ts-ignore
        throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
}

/**
 * Cria um novo endereço no banco de dados.
 * @param {AddressAttributes} addressData - Os detalhes do endereço a serem criados.
 * @returns {Promise<Address>} - O endereço criado.
 * @throws {Error} - Se ocorrer um erro durante a criação do endereço.
 */
async function createAddress(addressData: AddressAttributes): Promise<Address> {
    try {
        return Address.create(addressData);
    } catch (error) {
        // @ts-ignore
        throw new Error(`Erro ao criar endereço: ${error.message}`);
    }
}

/**
 * Lê todos os usuários no banco de dados.
 * @returns {Promise<User[]>} - Uma lista de todos os usuários.
 */
async function readAllUsers(): Promise<User[]> {
    return await User.findAll({
        attributes: ['id', 'name', 'email', 'phone', 'birthday', 'isAdmin',],
        include: [
            {
                model: Address,
                as: 'addresses',
            },
        ]
    });
}

/**
 * Lê um usuário pelo ID no banco de dados.
 * @param {string} id - O ID do usuário a ser lido.
 * @returns {Promise<User | null>} - O usuário encontrado ou null se não encontrado.
 */
async function readUserById(id: string): Promise<User | null> {
    return await User.findByPk(id, {
        attributes: ['id', 'name', 'email', 'phone', 'birthday', 'isAdmin',],
        include: [
            {
                model: Address,
                as: 'addresses',
            },
        ],
    });
}

/**
 * Atualiza os detalhes de um usuário no banco de dados.
 * @param {string} userId - O ID do usuário a ser atualizado.
 * @param {{ name: string; email: string; phone: string; birthday: Date; date_register: Date }} req - Os novos detalhes do usuário.
 * @returns {Promise<User | null>} - O usuário atualizado ou null se não encontrado.
 */
async function updateUser(
    userId: string,
    req: {
        name: string;
        email: string;
        phone: string;
        birthday: Date;
        date_register: Date;
    }
): Promise<User | null> {
    console.log(req);
    const {name, email, phone, birthday} = req;

    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    user.name = name;
    user.email = email;
    user.phone = phone;
    user.birthday = birthday;

    await user.save();

    return user;
}

/**
 * Remove um usuário pelo ID no banco de dados.
 * @param {string} userId - O ID do usuário a ser removido.
 * @returns {Promise<User | null>} - O usuário removido ou null se não encontrado.
 */
async function removeUser(userId: string): Promise<User | null> {
    const user = await User.findByPk(userId);

    if (!user) {
        throw new Error('Usuário não encontrado');
    }

    await user.destroy();
    return user;
}

export {readAllUsers, readUserById, createUser, updateUser, removeUser, createAddress};